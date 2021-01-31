const { Result } = require("express-validator");
const {success, failed} = require("../../config/response");
const {books} = require("../../models");

exports.getbooks = async (req, res) => {  
    try {
      const data = await books.findAll();        
      return res.json(
        success({ message: "Data berhasil", data }));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };

  exports.createbooks = async (req, res) => {  
    
    const payload = {
      type_books_id : req.body.type_books_id,
      name : req.body.name
    };
    
    try {
      const data = await books.create(payload); 

      return res.json(
        success({ message: "Data berhasil ditambahkan" ,data }));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };

  exports.updatebooks = async (req, res) => {  
    
    const payload = {
      name : req.body.name
    };

    const where = {
      id : req.body.id
    }
    
    try {
      const data = await books.update(payload, {where}); 

      return res.json(
        success({ message: "Data berhasil ditambahkan"}));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };


  exports.deletebooks = async (req, res) => {  
    
    const where = {
      id : req.body.id
    };
    try {
      const data = await books.destroy({where}); 

      return res.json(
        success({ message: "Data berhasil dihapus"}));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };
