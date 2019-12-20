import RdfResourceImpl, { RdfResource } from './RdfResource'
import Clownface from 'clownface/lib/Clownface'

export type AnyFunction<A = any> = (...input: any[]) => A
export type Constructor<A extends RdfResource = RdfResource> = new (...input: any[]) => A
interface ShouldApply {
  shouldApply: boolean | ((entity: RdfResource) => boolean)
}

export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>

export class ResourceFactory {
  private __mixins: Set<Mixin<any>> = new Set()
  public BaseClass: Constructor = RdfResourceImpl

  public addMixin<T extends AnyFunction>(mixin: Mixin<T> & ShouldApply): void {
    this.__mixins.add(mixin)
  }

  public createEntity<T extends AnyFunction>(term: Clownface, explicitMixins: Mixin<T>[] = []): RdfResource {
    const entity = new this.BaseClass(term)

    const mixins = [...this.__mixins].reduce<Mixin<T>[]>((selected, next: any) => {
      if (next.shouldApply === true || (typeof next.shouldApply === 'function' && next.shouldApply(entity))) {
        if (!selected.includes(next)) {
          selected.push(next)
        }
      }

      return selected
    }, [...explicitMixins])

    const Type = mixins.reduce<Constructor>((Mixed: Constructor, Next: Mixin<T>) => Next(Mixed), this.BaseClass)

    return new Type(term)
  }
}

export const instance = new ResourceFactory()
