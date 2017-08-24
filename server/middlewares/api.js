const express = require('express');
const router  = express.Router();

router.get("/feed", (req, res) => {
  let fakeData = [
    {
      id: 1,
      user: {
        avatarImageURL: '',
        handle: 'butt',
      },
      content: 'Hello world',
    },
    {
      id: 1,
      user: {
        avatarImageURL: '',
        handle: 'butt',
      },
      content: 'Hello world',
    },
    {
      id: 1,
      user: {
        avatarImageURL: '',
        handle: 'butt',
      },
      content: 'Hello world',
    },
    {
      id: 1,
      user: {
        avatarImageURL: '',
        handle: 'butt',
      },
      content: 'Hello world',
    },
  ]
  res.json(fakeData);
});

module.exports = router;
