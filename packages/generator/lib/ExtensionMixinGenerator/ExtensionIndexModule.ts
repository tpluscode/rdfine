import { GeneratedModule } from '../index'
import { Project } from 'ts-morph'

export class ExtensionIndexModule implements GeneratedModule {
  constructor(public prefix: string, public terms: string[]) {
  }

  writeModule({ project }: { project: Project }): void {
    const extensionsModule = project.createSourceFile(`extensions/${this.prefix}.ts`, {}, { overwrite: true })

    for (const extendedTerm of this.terms) {
      extensionsModule.addExportDeclaration({
        namedExports: [`${extendedTerm}MixinEx`],
        moduleSpecifier: `./${this.prefix}/${extendedTerm}`,
      })
    }
  }
}
