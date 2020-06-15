import * as log from 'https://deno.land/std/log/mod.ts'

// console.log(log)
console.log(log.LogLevels)
log.debug("Hello world");
log.info("Hello world");
log.warning("Hello world");
log.error("Hello world");
log.critical("500 Internal server error");


/**
 * 定制 log 方案，可以用于日志记录
 */
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler('DEBUG'),
    file: new log.handlers.FileHandler('WARNING', {
      filename: 'files/log.txt',
      formatter: "{levelName} {msg}"
    })
  },
  loggers: {
    default: {
      level: 'DEBUG',
      handlers: ['console', 'file']
    },
    tasks: {
      level: 'ERROR',
      handlers: ['console']
    }
  }
})
let logger
logger = log.getLogger()
logger.debug('fizz')
logger.warning('buzz')

logger = log.getLogger('tasks')
logger.debug('fizz')
logger.error('buzz')