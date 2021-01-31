const { Result } = require("express-validator");
const { success, failed } = require("../../config/response");
const { orders,users,books } = require("../../models");

exports.getOrders = async (req, res) => {
 // console.log
  try {
    const data = await orders.bulkCreate(res.body);
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

 
