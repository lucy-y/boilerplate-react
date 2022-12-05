import express, { Request, Response } from "express";
// 공통 사항
import swaggerUi from "swagger-ui-express";
// json 파일을 바로 불러오기
import swaggerJson from "./src/swagger/swagger.json";

const app = express();

//mongo
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lucy:lucy1234@cluster0.pkvicdr.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected...")).catch((err: any) => console.log(err));

// json으로 된 swagger 연동
app.use('/api-json', swaggerUi.serve, swaggerUi.setup(swaggerJson))

type DataInfo = {
    name: string;
    version: string;
};

let dataForm: DataInfo = {
    name: "api",
    version: "1.0.0"
}

let dataForm2: DataInfo = {
    name: "api-*",
    version: "1.0.0"
}

app.get("/get", (req: Request, res: Response) => {
    res.send(dataForm);
})


app.get("/name/:user_name", (req: Request, res: Response) => {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<html><body>' +
        '<h1>Hello ' + req.params.user_name + '</h1>' +
        '</body></html>'
    );
})

app.get("*", (req: Request, res: Response) => {
    res.send(dataForm2);
})


const port: number = 8081;
app.listen(port, function () {
    console.log('http://localhost:%s', port)
})