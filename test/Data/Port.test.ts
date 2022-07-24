import { Vanilla } from '../../src/Lib/Data/Vanilla'
import { CommandInfo } from '../../src/Lib/Data/CommandInfo'
import * as fs from 'fs'
import { Edu } from '../../src/Lib/Data/Edu'
import { ParameterType } from '../../src/Lib/Types/ParameterType'

// describe("Export", ()=>{
//     const data: {
//         "$schema": string,
//         vanilla: CommandInfo[],
//         edu: CommandInfo[],
//     } = {
//         "$schema": "./commands schema.json",
//         vanilla: [],
//         edu: []
//     }

//     for (const key in Vanilla) {
//         const value = Vanilla[key];
//         value.forEach(item=>convert(data.vanilla, item));
//     }

//     for (const key in Edu) {
//         const value = Edu[key];
//         value.forEach(item=>convert(data.edu, item));
//     }

//     fs.writeFileSync("./data.test.json", JSON.stringify(data));
// })

function convert(receiver: CommandInfo[], item : CommandInfo) {
    const copy = Object.assign({}, item);

    copy.parameters = copy.parameters.map(item=>{
        item.type = ParameterType[item.type] as any;
        return item;
    })

    receiver.push(copy);
}