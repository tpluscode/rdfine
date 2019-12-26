import RdfResourceImpl, { RdfResource } from './RdfResource'
import { Clownface } from 'clownface'

export type AnyFunction<A = any> = (...input: any[]) => A
export type Constructor<A extends RdfResource = RdfResource> = new (...input: any[]) => A
interface ShouldApply {
  shouldApply: boolean | ((entity: RdfResource) => boolean)
}

export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>

export class ResourceFactory<T extends AnyFunction> {
  private __mixins: Set<Mixin<any>> = new Set()
  public BaseClass: Constructor = RdfResourceImpl

  public addMixin(mixin: Mixin<T> & ShouldApply): void {
    this.__mixins.add(mixin)
  }

  public createEntity<R extends RdfResource>(term: Clownface, explicitMixins: Mixin<T>[] = []): RdfResource & R {
    const entity = new this.BaseClass(term)

    const mixins = [...this.__mixins].reduce<Mixin<T>[]>((selected, next: Mixin<T> & ShouldApply) => {
      if (next.shouldApply === true || (typeof next.shouldApply === 'function' && next.shouldApply(entity))) {
        if (!selected.includes(next)) {
          selected.push(next)
        }
      }

      return selected
    }, [...explicitMixins])

    const Type = mixins.reduce<Constructor>((Mixed: Constructor, Next: Mixin<T>) => Next(Mixed), this.BaseClass)
    ;(Type as any).__mixins = mixins

    return new Type(term) as RdfResource & R
  }
}

export const factory = new ResourceFactory()
