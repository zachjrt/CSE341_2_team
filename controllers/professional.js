const data = {
    "_id": {
      "$oid": "621fe1f527d68ebb24438395"
    },
    "professionalName": "Zachary Thompson",
    "nameLink": {
      "firstName": "Thompson",
      "url": "https://zachjrt.itch.io/"
    },
    "base64Image": "",
    "firstName": "Zachary",
    "primaryDescription": "Learning as he goes",
    "workDescription1": "Works at Texas Tech",
    "workDescription2": "In University Student Housing",
    "linkTitleText": "See work",
    "linkedInLink": {
      "link": "https://zachjrt.itch.io/",
      "text": "Itch.io"
    },
    "githubLink": {
      "link": "https://github.com/zachjrt",
      "text": "GitHub"
    },
    "contactText": "Any contact request should be sent to zachjrt@byui.edu."
  };

exports.getProfessional = (req, res, next) => {
    res.status(200).json(data);
  };
  
