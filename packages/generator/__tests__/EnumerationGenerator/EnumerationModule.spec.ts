import cf, { Clownface } from 'clownface'
import $rdf from 'rdf-ext'
import { rdf } from '@tpluscode/rdf-ns-builders'
import { Project } from 'ts-morph'
import { EnumerationModule } from '../../lib/EnumerationGenerator/EnumerationModule'
import { fakeLog } from '../_helpers/util'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { ex } from '../_helpers/prefix'

describe('EnumerationModule', () => {
  let project: Project
  let graph: Clownface

  beforeEach(() => {
    project = new Project({
      useInMemoryFileSystem: true,
    })

    graph = cf({ dataset: $rdf.dataset() })
  })

  it('writes a module with enumeration members', () => {
    // given
    const types = new FakeTypeCollection([
      [ex.Member1, { type: 'EnumerationMember', termName: 'Member1', prefixedName: 'ex.Member1' }],
    ])

    const enumeration = graph.node(ex.Enum)
      .addIn(rdf.type, [ex.Member1, ex.Member2])
    const module = new EnumerationModule(enumeration, {
      name: 'Enum',
      module: './Enum',
      qualifiedName: 'Ex.Enum',
      type: 'Enumeration',
    })

    // when
    module.writeModule(project, types, {
      log: fakeLog(),
      prefix: 'ex',
    })

    // then
    expect(project.getSourceFile('./Enum.ts')).toMatchSnapshot()
  })
})
