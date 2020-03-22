import { SingleContextClownface } from 'clownface'
import { Project } from 'ts-morph'
import { Context } from '../index'

export interface Options {
  clas: SingleContextClownface
  project: Project
  exclude: string[]
}

export interface ModuleStrategy {
  matches(term: SingleContextClownface): boolean
  generate(options: Options, context: Context): {
    moduleSpecifier: string
    mainModuleExport?: string
    mainModuleMixinExport?: string
  }
}
