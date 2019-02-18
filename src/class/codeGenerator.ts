const fs = require('fs')
import innerConfig from '../../config/path';
import { PageSource } from './ps'
import Logger from './log'

const { outPath } = innerConfig
const logger = new Logger()

class CodeGenerator {
  public static main(innerConfig: any, config: any): void {
    // 删除输出文件
    fs.unlinkSync('message.txt')
    const ps = new PageSource()
    const { ast, filename } = ps.generatorAstFromConfig(innerConfig, config)
    ps.output(ast, `${outPath}/${filename}`)
    logger.log('yellow', `${filename}已生成到${outPath}`)
  }
}

export default CodeGenerator