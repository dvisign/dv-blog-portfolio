const handler = (req, res) => {
  if (req.method === "GET") {
    res.json({
      navList: [
        {
          url: "/",
          name: "home",
        },
      ],
    });
  }
};

export default handler;
