import { Project, VariableDeclarationKind } from 'ts-morph'
import { Context } from './index'

export function generateNamespace({ project }: { project: Project}, context: Context) {
  const nsFile = project.createSourceFile('lib/namespace.ts', {}, { overwrite: true })

  nsFile.addImportDeclaration({
    defaultImport: 'namespace',
    moduleSpecifier: '@rdfjs/namespace',
  })

  nsFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{
      name: context.prefix,
      initializer: `namespace('${context.namespace().value}')`,
    }],
    isExported: true,
  })
}
