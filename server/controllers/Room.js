const { request, response } = require('express');
const RoomModel = require('../models/room.model');

class Room {
  /**
   * 
   * @param {request} req 
   * @param {response} res 
   */
  static all(req, res) {
    RoomModel.find({}, (err, data) => Room.#response(res, err, data));
  }

  static #response(res, err, data) {
    if (err) return res.status(500).json({ err });
    return res.status(200).json(data);
  }

  /**
   * 
   * @param {request} req
   * @param {response} res
   */
  static get(req, res) {
    const id = req.params.id;
    if (!id) return res.status(500).json({ err: 'No ID given' });

    RoomModel.findById(id, (err, data) => Room.#response(res, err, data))    
  }

  /**
   * 
   * @param {object} object 
   */
  static #validateNoFalse(object) {
    const keys = Object.keys(object);

    for (let i = 0; i < keys.length; i++) {
      const value = object[keys[i]];

      if (!value) return false;
    }

    return true;
  }

  /**
   * 
   * @param {request} req
   * @param {response} res
   */
  static add(req, res) {
    const { type, description, image, isFeatured, services, datesBooked, max } = req.body;
    const isValid = Room.#validateNoFalse({ type, description, image, isFeatured, services, datesBooked, max });
    
    if (!isValid) return res.status(500).json({ err: 'All Room values not provided' });
    RoomModel.create({ type, description, image, isFeatured, services, datesBooked, max }, (err, data) => Room.#response(res, err, data));
  }

  /**
   * 
   * @param {request} req
   * @param {response} res
   */
  static delete(req, res) {
    const ID = req.params.id;
    if (!ID) return res.status(500).json({ err: "No id given" });

    RoomModel.deleteOne({ _id: ID }, (err, data) =>
      Room.#response(res, err, data)
    );
  }

  /**
   * 
   * @param {request} req
   * @param {response} res
   */
  static update(req, res) {
    const ID = req.params.id;
    if (!ID) return res.status(500).json({ err: "No id given" });

    RoomModel.findOneAndUpdate({ _id: ID }, req.body, (err, data) =>
      Room.#response(res, err, data)
    );
  }
}


module.exports = Room;