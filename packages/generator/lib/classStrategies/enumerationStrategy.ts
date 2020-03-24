import { ModuleStrategy, Options } from './index'
import { rdf } from '@tpluscode/rdf-ns-builders'
import { SingleContextClownface } from 'clownface'
import { ObjectLiteralExpression } from 'ts-morph'
import { Context } from '../index'
import nameOf from '../util/nameOf'
import { isEnumerationType } from '../util/subClasses'

export const enumerationStrategy: ModuleStrategy = {
  matches(term: SingleContextClownface): boolean {
    return isEnumerationType(term)
  },
  generate({ clas, project }: Options, context: Context) {
    const name = nameOf.term(clas)
    const enumFile = project.createSourceFile(`${name}.ts`, {}, { overwrite: true })

    context.log.debug('Generating enumeration %s', name)

    enumFile.addImportDeclaration({
      namedImports: ['NamedNode'],
      moduleSpecifier: 'rdf-js',
    })
    enumFile.addImportDeclaration({
      namedImports: [context.prefix],
      moduleSpecifier: './lib/namespace',
    })

    enumFile.addTypeAlias({
      name,
      type: 'NamedNode',
      isExported: true,
    })

    const enumeration = enumFile.addExportAssignment({
      expression: '{}',
      isExportEquals: false,
    }).getExpression() as ObjectLiteralExpression

    clas.in(rdf.type)
      .forEach(enumMember => {
        const memberName = nameOf.term(enumMember)

        enumeration.addPropertyAssignment({
          name: memberName,
          initializer: `${context.prefix}.${memberName}`,
        })
      })

    return {
      moduleSpecifier: `./${name}`,
      mainModuleExport: name,
    }
  },
}
