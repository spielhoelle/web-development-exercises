const mongoose = require("mongoose");
const areaSchema = require("../models/Area"); 
const Area = mongoose.model("Area", areaSchema); 

(async () => {
  const areas = await Area.find({})
  if(areas.length == 0){
    console.log(`DATABASE SEEDER. No areas in database, lets create some`);
    Area.create({
      name: 'Friedrichshain',
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [ 13.4397554397583, 52.51384428313059 ],
            [ 13.436880111694336, 52.51021387312179 ],
            [ 13.449540138244636, 52.507027222951606 ],
            [ 13.468465805053713, 52.50417993843309 ],
            [ 13.470783233642582, 52.50634807091736 ],
            [ 13.476963043212896, 52.5134525267024 ],
            [ 13.440656661987305, 52.51713489924289 ],
            [ 13.4397554397583, 52.51384428313059 ]
          ]
        ]
      }
    })
  }
})()

exports.getAreas = async (req, res) => {
  const areas = await Area.find();
  res.status(200).json(areas);
}
exports.createArea = async (req, res) => {
  var area = await new Area({
    name: req.body.name,
    properties: req.body.loc.properties,
    geometry: {
      type: req.body.loc.type,
      coordinates: req.body.loc.geometry.coordinates
    }
  })
  area.save()
  res.status(200).json(area);
}
exports.updateArea = async (req, res) => {
  const area = await Area.findByIdAndUpdate(req.body.id, req.body);
  res.status(200).json(area);
}
