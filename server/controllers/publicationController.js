const asyncHandler = require("../middleware/asyncHandler");
const Publication = require("../models/publicationModel");
const fs = require('fs')

const createPublication = asyncHandler(async (req, res) => {
  const file = `/uploads/${req.file.filename}`
  console.log(req.file)
  const { title, description, platform, view, like, favourite } = req.body;
  var currentDate = new Date();

// Get the current day of the week
  var day = currentDate.getDay();

  // Define an array of weekday names
  var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']

// Get the weekday name based on the day number
  var dayName = weekdays[day];
  var month = months[(currentDate.getMonth()+1)]
  var date = dayName + ' ' + (currentDate.getMonth()+1) + ' ' + month + ' ' + currentDate.getFullYear();
  const publication = await Publication.create({title, description, file, platform, view, like, favourite,date});

  if (publication) {
    res.status(201).json({
        _id: publication._id,
        title: publication.title,
        description: publication.description,
        file: publication.file,
        platform: publication.platform,
        view: publication.view,
        like: publication.like,
      favourite: publication.favourite,
    });
  } else {
    res.status(400);
    throw new Error("Invalid publication data");
  }
});

const getPublication = asyncHandler(async (req, res) => {
  const publication = await Publication.find({});
  // publication.map((item) => {
  //   item.file = fs.readFileSync(process.cwd() + `/uploads/${item.file}`)
  //   // console.log(item.file)
  // })
  // const img = require(process.cwd()+`/uploads/${publication[0].file}`)
  // // console.log(process.cwd()+`/uploads/${publication[0].file}`)
  // console.log(img)
  res.status(200).json(publication);
});

const getPublicationProfile = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  
  if (publication) {
    res.status(200).json({
        _id: publication._id,
        title: publication.title,
        description: publication.description,
        file: publication.file,
        platform: publication.platform,
        view: publication.view,
        like: publication.like,
        favourite: publication.favourite
    });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const getPublicationByID = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    res.status(200).json(publication);
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const deletePublication = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    await Publication.deleteOne({ _id: publication._id });
    res.status(200).json({ message: "Publication deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const updatePublication = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    publication.title = req.body.title || publication.title;
    publication.description = req.body.description || publication.description;
    publication.file = req.body.file || publication.file;
    publication.platform = req.body.platform || publication.platform;
    publication.view = req.body.view || publication.view;
    publication.like = req.body.like || publication.like;
    publication.favourite = req.body.favourite || publication.favourite;
    
    const updatedPublication = await publication.save();
    res.status(200).json({
      _id: updatedPublication._id,
        title: updatedPublication.title,
        description: updatedPublication.description,
        file: updatedPublication.file,
        platform: updatedPublication.platform,
        view: updatedPublication.view,
        like: updatedPublication.like,
        favourite: updatedPublication.favourite
    });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const views = asyncHandler(async (req, res) => {
  const view = await Publication.findById(req.params.id);
  if (view) {
    view.view = view.view+1;
    const updateView = await view.save();
    res.status(200).json({
      view:updateView.view
    })
  } else {
    res.status(400);
    throw new Error("view not found");
  }

})

const like = asyncHandler(async (req, res) => {
  const like = await Publication.findById(req.params.id);
  if (like) {
    like.like = like.like+1;
    const updateLike = await like.save();
    res.status(200).json({
      like:updateLike.like
    })
  } else {
    res.status(400);
    throw new Error("like not found");
  }

})

const unlike = asyncHandler(async (req, res) => {
  const unlike = await Publication.findById(req.params.id);
  if (unlike) {
    unlike.like = unlike.like-1;
    const updateunLike = await unlike.save();
    res.status(200).json({
      unlike:updateunLike.like
    })
  } else {
    res.status(400);
    throw new Error("unlike not found");
  }

})

const favourite = asyncHandler(async (req, res) => {
  const favourite = await Publication.findById(req.params.id);
  if (favourite) {
    favourite.favourite = favourite.favourite+1;
    const updatefavourite = await favourite.save();
    res.status(200).json({
      favourite:updatefavourite.favourite
    })
  } else {
    res.status(400);
    throw new Error("favourite not found");
  }

})

module.exports= {createPublication, getPublication, getPublicationByID, getPublicationProfile,deletePublication,updatePublication,views, like,unlike,favourite};
