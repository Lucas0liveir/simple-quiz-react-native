const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "PUT") {
    const { gotItRight, time, id } = req.body;
    const result = router.db.get("quiz").value();
    const quiz = result.find((q) => q.id == id);

    quiz.completed = true;

    if (gotItRight) {
      const userScore =
        ((100 - (time <= 2 ? 0 : time * 1.5)) / 100) * quiz.maxScore;
      quiz.userScore = userScore > 0 ? userScore : 0;
    } else {
      quiz.userScore = 0;
    }

    req.body = quiz;
    res.redirect("/quiz/" + id);
    
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
