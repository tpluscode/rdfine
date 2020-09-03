import { Project } from 'ts-morph'
import cf, { AnyPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { xsd } from '@tpluscode/rdf-ns-builders'
import { MixinModule } from '../../lib/MixinGenerator/MixinModule'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { ex } from '../_helpers/prefix'
import { fakeLog } from '../_helpers/util'

describe('MixinModule', () => {
  let project: Project
  let vocabulary: AnyPointer

  beforeEach(() => {
    project = new Project({
      useInMemoryFileSystem: true,
    })

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
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
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
      qualifiedMixinName: 'Schema.PersonMixin',
    }], [])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
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
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('generates array property', () => {
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
      type: 'resource',
      prefixedTerm: 'ex.foo',
      semantics: 'loose',
      termName: 'foo',
      values: ['array'],
      range: [{
        type: 'Resource',
        mixinName: 'FooMixin',
        module: './Foo',
        localName: 'Foo',
        qualifiedName: 'Example.Foo',
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('generates list property', () => {
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
      type: 'resource',
      prefixedTerm: 'ex.foo',
      semantics: 'loose',
      termName: 'foo',
      values: ['list'],
      range: [{
        type: 'Resource',
        mixinName: 'FooMixin',
        module: './Foo',
        localName: 'Foo',
        qualifiedName: 'Example.Foo',
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('generates list/single property', () => {
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
      type: 'resource',
      prefixedTerm: 'ex.foo',
      semantics: 'loose',
      termName: 'foo',
      values: ['list', 'single'],
      range: [{
        type: 'Resource',
        mixinName: 'FooMixin',
        module: './Foo',
        localName: 'Foo',
        qualifiedName: 'Example.Foo',
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
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
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
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
        qualifiedMixinName: 'Example.FooMixin',
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('generates property with datatype-annotated literal', () => {
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
      type: 'literal' as const,
      prefixedTerm: 'ex.foo',
      semantics: 'strict' as const,
      termName: 'foo',
      range: [{
        type: 'Literal' as const,
        nativeName: 'string',
        nativeType: String,
        datatype: xsd.anyURI,
      }, {
        type: 'Literal' as const,
        nativeName: 'string',
        nativeType: Number,
        datatype: xsd.anyURI,
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('generates date property', () => {
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
      type: 'literal' as const,
      prefixedTerm: 'ex.foo',
      semantics: 'strict' as const,
      termName: 'foo',
      range: [{
        type: 'Literal' as const,
        nativeName: 'Date',
        nativeType: Date,
        datatype: xsd.date,
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('does not add datatype annotation to literal property when datatype is ambiguous', () => {
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
      type: 'literal' as const,
      prefixedTerm: 'ex.foo',
      semantics: 'strict' as const,
      termName: 'foo',
      range: [{
        type: 'Literal' as const,
        nativeName: 'string',
        nativeType: String,
        datatype: xsd.anyURI,
      }, {
        type: 'Literal' as const,
        nativeName: 'string',
        nativeType: Number,
        datatype: xsd.int,
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('Class.ts')).toMatchSnapshot()
  })

  it('generates a bundle module with property mixin types but skipping external mixins', () => {
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
      semantics: 'loose' as const,
      termName: 'foo',
      range: [{
        type: 'ExternalResource' as const,
        mixinName: 'FooMixin',
        module: '@rdfine/example/Foo',
        qualifiedName: 'Example.Foo',
        package: '@rdfine/example',
        qualifier: 'Example',
        qualifiedMixinName: 'Example.FooMixin',
      }, {
        type: 'Resource' as const,
        localName: 'Friend',
        module: './Friend',
        qualifiedName: 'Example.Friend',
        mixinName: 'FriendMixin',
      }],
    }])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('bundles/Class.ts')).toMatchSnapshot()
    expect(project.getSourceFile('bundles/index.ts')).toMatchSnapshot()
  })

  it('generates a bundle module with super classes but without externals', () => {
    // given
    const module = new MixinModule(vocabulary.node(ex.Class), {
      type: 'Resource',
      localName: 'Class',
      qualifiedName: 'Example.Class',
      module: './Class',
      mixinName: 'ClassMixin',
    }, [{
      type: 'Resource' as const,
      mixinName: 'SuperMixin',
      qualifiedName: 'Example.Super',
      module: './Example',
      localName: 'Super',
    }, {
      type: 'ExternalResource' as const,
      mixinName: 'ExternMixin',
      qualifiedName: 'Example.Extern',
      module: 'Extern',
      qualifiedMixinName: 'Example.FooExtern',
      package: 'Extern',
      qualifier: 'Foo',
    }], [])

    // when
    module.writeModule(project, new FakeTypeCollection(), {
      prefix: 'ex',
      defaultExport: 'Example',
      log: fakeLog(),
      vocabulary,
    })

    // then
    expect(project.getSourceFile('bundles/Class.ts')).toMatchSnapshot()
    expect(project.getSourceFile('bundles/index.ts')).toMatchSnapshot()
  })
})
