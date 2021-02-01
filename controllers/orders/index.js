const { Result } = require("express-validator");
const { success, failed } = require("../../config/response");
const { orders } = require("../../models");

exports.createOrders = async (req, res) => {

  try {

    const data = await orders.bulkCreate(req.body.orders);
    return res.json(
      success({
        message : "Data Berhasil Ditemukan",
        data
      })
    )
  } catch (error) {

    return res.json(
      failed({
        message : "Terjadi Kesalahan Sistem",
        data : error
      })
    )

  }
};

 
