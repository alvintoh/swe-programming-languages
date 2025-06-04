"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const zod_1 = require("zod");
const dataSchema = zod_1.z.object({
    title: zod_1.z.string(),
    id: zod_1.z.number(),
    values: zod_1.z.array(zod_1.z.union([zod_1.z.string(), zod_1.z.number()])),
});
function output(data) {
    console.log("Output:", data);
}
const content = JSON.parse(node_fs_1.default.readFileSync("data.json").toString());
const parsedData = dataSchema.parse(content);
output(parsedData);
//# sourceMappingURL=app.js.map