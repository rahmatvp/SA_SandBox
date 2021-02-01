const {success, failed} = require("../../config/response");
const {users,orders,books,type_books} = require("../../models");

exports.getusers = async (req, res) => {  
    try {
      const data = await users.findAll();              
      return res.json(
        success({ message: "Data berhasil", data }));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };


  exports.getusersTrans = async (req, res) => {  
    try {
      const data = await users.findAll({
        attributes : ['name','phone'],
        include: {
          model : orders,
          attributes : ['qty'],
          include : {
             model : books,
             attributes : ['name'],
             include :{
               model : type_books,
               attributes : ['name']
             }
          }
        }
      });       
     // const data ='';       
      return res.json(
        success({ message: "Data berhasil", data }));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };


  exports.createusers = async (req, res) => {  
    
    const payload = {
      name : req.body.name,
      address : req.body.address,
      phone : req.body.phone,
      gender : req.body.gender
    };
    
    try {
      const data = await users.create(payload); 

      return res.json(
        success({ message: "Data berhasil ditambahkan" ,data }));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };

  exports.updateusers = async (req, res) => {  
    
    const payload = {
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
        gender : req.body.gender
    };

    const where = {
      id : req.body.id
    }
    
    try {
      const data = await users.update(payload, {where}); 

      return res.json(
        success({ message: "Data berhasil diubah"}));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };


  exports.deleteusers = async (req, res) => {  
    
    const where = {
      id : req.body.id
    };
    try {
      const data = await users.destroy({where}); 

      return res.json(
        success({ message: "Data berhasil dihapus"}));
    } catch (error) {
      return res.json(
        failed({message: "terjadi Kesalahan Sistem", data: error})
      )
    }
  };
