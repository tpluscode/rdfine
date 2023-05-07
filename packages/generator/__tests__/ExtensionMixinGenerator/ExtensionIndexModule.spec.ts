import { Project } from 'ts-morph'
import { expect } from 'chai'
import { ExtensionIndexModule } from '../../lib/ExtensionMixinGenerator/ExtensionIndexModule.js'

describe('ExtensionIndexModule', () => {
  it('generates exports for extended terms', () => {
    // given
    const project = new Project({
      useInMemoryFileSystem: true,
    })
    const module = new ExtensionIndexModule('rdfs', ['Class', 'Property'])

    // when
    module.writeModule({ project })

    // then
    expect(project.getSourceFile('extensions/rdfs.ts')).toMatchSnapshot()
  })
})
