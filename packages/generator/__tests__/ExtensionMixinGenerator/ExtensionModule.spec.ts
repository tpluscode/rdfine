import { Project, SourceFile } from 'ts-morph'
import cf, { AnyPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { sh } from '@tpluscode/rdf-ns-builders'
import { ExtensionModule } from '../../lib/ExtensionMixinGenerator/ExtensionModule.js'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection.js'
import { Context } from '../../lib/index.js'
import { fakeLog } from '../_helpers/util.js'
import {expect} from "chai";

describe('ExtensionModule', () => {
  describe('writeModule', () => {
    let project: Project
    let vocabulary: AnyPointer
    let indexModule: SourceFile
    let log: Context['log']

    beforeEach(() => {
      project = new Project({
        useInMemoryFileSystem: true,
      })
      indexModule = project.createSourceFile('index.ts')

      vocabulary = cf({ dataset: $rdf.dataset() })
      log = fakeLog()
    })

    it('creates an extension module',  function () {
      // given
      const module = new ExtensionModule({
        domain: vocabulary.namedNode(sh.PropertyShape),
        type: {
          type: 'ExternalResource',
          localName: 'PropertyShape',
          module: '@rdfine/shacl/lib/PropertyShape',
          mixinName: 'PropertyShapeMixin',
          exportName: '',
          package: '',
          qualifiedMixinName: '',
          qualifiedName: '',
          qualifier: '',
        },
      })

      // when
      module.writeModule({
        project,
        indexModule,
        types: new FakeTypeCollection(),
        context: {
          log,
          defaultExport: 'Dash',
          vocabulary,
          prefix: 'dash',
        },
      })

      // then
      expect(project.getSourceFile('extensions/sh/PropertyShape.ts')).to.matchSnapshot(this)
    })
  })
})
