class userController {
  static async findAllUser(req, res) {
    try {
      const data = [
        { username: "ali", hair_color: "brown", height: 1.2 },
        { username: "marc", hair_color: "blue", height: 1.4 },
        { username: "joe", hair_color: "brown", height: 1.7 },
        { username: "zehua", hair_color: "black", height: 1.8 },
      ];
      const map = data.map((el) => {
        return [el.username, el.hair_color, el.height];
      });
      const obj = {
        h: ["username", "hair_color", "height"],
        d: map,
      };
      console.log(obj);
      res.status(200).json(obj);
    } catch (err) {}
  }
}

module.exports = userController;
