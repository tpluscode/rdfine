import { Project, SourceFile } from 'ts-morph'
import cf, { Clownface } from 'clownface'
import $rdf from 'rdf-ext'
import { MixinModule } from '../../lib/MixinGenerator/MixinModule'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { ex } from '../_helpers/prefix'
import { fakeLog } from '../_helpers/util'

describe('MixinModule', () => {
  let sourceFile: SourceFile
  let vocabulary: Clownface

  beforeEach(() => {
    const project = new Project({
      useInMemoryFileSystem: true,
    })

    sourceFile = project.createSourceFile('./enum.ts')

    vocabulary = cf({ dataset: $rdf.dataset() })
  })

  it('generates a mixin class without props', () => {
    // given
    const module = new MixinModule(vocabulary.node(ex.Class), {
      type: 'Resource',
      localName: 'Class',
      qualifiedName: 'Example.Class',
      module: './Class',
      mixinName: 'ClassMixin',
    }, [], [])

    // when
    module.writeModule(sourceFile, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(sourceFile).toMatchSnapshot()
  })

  it('generates a mixin class with external super classes', () => {
    // given
    const module = new MixinModule(vocabulary.node(ex.Class), {
      type: 'Resource',
      localName: 'Class',
      qualifiedName: 'Example.Class',
      module: './Class',
      mixinName: 'ClassMixin',
    }, [{
      type: 'ExternalResource' as const,
      mixinName: 'PersonMixin',
      module: '@rdfine/schema/Person',
      qualifiedName: 'Schema.Person',
      package: '@rdfine/schema',
      qualifier: 'Schema',
    }], [])

    // when
    module.writeModule(sourceFile, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(sourceFile).toMatchSnapshot()
  })

  it('generates property with automatic type cast when predicate has strict semantics', () => {
    // given
    const module = new MixinModule(vocabulary.node(ex.Class), {
      type: 'Resource',
      localName: 'Class',
      qualifiedName: 'Example.Class',
      module: './Class',
      mixinName: 'ClassMixin',
    }, [], [{
      term: ex.foo,
      name: 'foo',
      type: 'resource' as const,
      prefixedTerm: 'ex.foo',
      semantics: 'strict' as const,
      termName: 'foo',
      range: [{
        type: 'Resource' as const,
        mixinName: 'FooMixin',
        module: './Foo',
        localName: 'Foo',
        qualifiedName: 'Example.Foo',
      }],
    }])

    // when
    module.writeModule(sourceFile, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(sourceFile).toMatchSnapshot()
  })

  it('does not try import self when property has range of enclosing class', () => {
    // given
    const generateType = {
      type: 'Resource' as const,
      localName: 'Class',
      qualifiedName: 'Example.Class',
      module: './Class',
      mixinName: 'ClassMixin',
    }
    const module = new MixinModule(vocabulary.node(ex.Class), generateType, [], [{
      term: ex.foo,
      name: 'foo',
      type: 'resource' as const,
      prefixedTerm: 'ex.foo',
      semantics: 'strict' as const,
      termName: 'foo',
      range: [generateType],
    }])

    // when
    module.writeModule(sourceFile, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(sourceFile).toMatchSnapshot()
  })

  it('generates property with automatic external type cast when predicate has strict semantics', () => {
    // given
    const module = new MixinModule(vocabulary.node(ex.Class), {
      type: 'Resource',
      localName: 'Class',
      qualifiedName: 'Example.Class',
      module: './Class',
      mixinName: 'ClassMixin',
    }, [], [{
      term: ex.foo,
      name: 'foo',
      type: 'resource' as const,
      prefixedTerm: 'ex.foo',
      semantics: 'strict' as const,
      termName: 'foo',
      range: [{
        type: 'ExternalResource' as const,
        mixinName: 'FooMixin',
        module: '@rdfine/example/Foo',
        qualifiedName: 'Example.Foo',
        package: '@rdfine/example',
        qualifier: 'Example',
      }],
    }])

    // when
    module.writeModule(sourceFile, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(sourceFile).toMatchSnapshot()
  })
})
