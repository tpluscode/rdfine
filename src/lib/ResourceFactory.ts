import { RdfResource } from './RdfResource'
import Clownface from 'clownface/lib/Clownface'

export type Constructor<T = RdfResource> = new (...args: any[]) => T;
interface ShouldApply {
  shouldApply: boolean | ((entity: RdfResource) => boolean)
}

export type Mixin<T> = (<TBase extends Constructor<T>>(Base: TBase) => any)

export class ResourceFactory {
  private __mixins: Constructor[] = []
  private __baseClass: Constructor

  public constructor(baseClass: Constructor) {
    this.__baseClass = baseClass
  }

  public addMixin<T>(mixin: Mixin<T> & ShouldApply) {
    this.__mixins.push(mixin as any)
  }

  public createEntity<T>(term: Clownface, explicitMixins: Mixin<any>[] = []): RdfResource & T {
    const entity = new this.__baseClass(term)

    const mixins = this.__mixins.reduce((selected, next: any) => {
      if (next.shouldApply === true || next.shouldApply(entity)) {
        if (!selected.includes(next)) {
          selected.push(next)
        }
      }

      return selected
    }, [...explicitMixins])

    const Type = mixins.reduce<Constructor>((Mixed, Next: any) => Next(Mixed), this.__baseClass)

    return new Type(term) as unknown as RdfResource & T
  }
}
