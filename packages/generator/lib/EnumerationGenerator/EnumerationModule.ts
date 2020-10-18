import { ObjectLiteralExpression, Project, SourceFile } from 'ts-morph'
import { GraphPointer } from 'clownface'
import { rdf } from '@tpluscode/rdf-ns-builders'
import { Context, GeneratedModule } from '../index'
import { EnumerationType, TypeMetaCollection } from '../types'

export class EnumerationModule implements GeneratedModule {
  type: EnumerationType
  node: GraphPointer;

  public constructor(enumeration: GraphPointer, type: EnumerationType) {
    this.node = enumeration
    this.type = type
  }

  writeModule({ project, types, context, indexModule }: {project: Project; types: TypeMetaCollection; context: Pick<Context, 'prefix' | 'log'>; indexModule: SourceFile}) {
    context.log.debug('Generating enumeration %s', this.type.name)
    const enumFile = project.createSourceFile(`${this.type.module}.ts`, {}, { overwrite: true })

    enumFile.addImportDeclaration({
      namedImports: ['NamedNode'],
      moduleSpecifier: 'rdf-js',
    })
    enumFile.addImportDeclaration({
      namedImports: [context.prefix],
      moduleSpecifier: './lib/namespace',
    })

    const enumeration = enumFile.addExportAssignment({
      expression: '{}',
      isExportEquals: false,
    }).getExpression() as ObjectLiteralExpression

    let enumerationType = ''
    this.node.in(rdf.type)
      .forEach(enumMember => {
        const memberType = types.get(enumMember)
        if (memberType?.type !== 'EnumerationMember') {
          context.log.warn('Term %s was not recognized as enumeration member', enumMember.value)
          return
        }

        context.log.debug('Adding enum member %s', memberType.prefixedName)

        const nodeType = `NamedNode<'${enumMember.value}'>`
        enumeration.addPropertyAssignment({
          name: memberType.termName,
          initializer: memberType.prefixedName,
          trailingTrivia: ` as ${nodeType}`,
        })

        if (enumerationType === '') {
          enumerationType = `\n${nodeType}`
        } else {
          enumerationType += `\n| ${nodeType}`
        }
      })

    enumFile.addTypeAlias({
      name: this.type.name,
      type: enumerationType || 'NamedNode',
      isExported: true,
    })

    indexModule.addExportDeclaration({
      moduleSpecifier: this.type.module,
    }).toNamespaceExport()
    indexModule.addExportDeclaration({
      moduleSpecifier: this.type.module,
      namedExports: [`default as ${this.type.name}Enum`],
    })
  }
}
