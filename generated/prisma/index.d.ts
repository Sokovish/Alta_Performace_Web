
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Teste
 * 
 */
export type Teste = $Result.DefaultSelection<Prisma.$TestePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Medico
 * 
 */
export type Medico = $Result.DefaultSelection<Prisma.$MedicoPayload>
/**
 * Model Gestor
 * 
 */
export type Gestor = $Result.DefaultSelection<Prisma.$GestorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Testes
 * const testes = await prisma.teste.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Testes
   * const testes = await prisma.teste.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.teste`: Exposes CRUD operations for the **Teste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testes
    * const testes = await prisma.teste.findMany()
    * ```
    */
  get teste(): Prisma.TesteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico`: Exposes CRUD operations for the **Medico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medico.findMany()
    * ```
    */
  get medico(): Prisma.MedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gestor`: Exposes CRUD operations for the **Gestor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gestors
    * const gestors = await prisma.gestor.findMany()
    * ```
    */
  get gestor(): Prisma.GestorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Teste: 'Teste',
    Usuario: 'Usuario',
    Medico: 'Medico',
    Gestor: 'Gestor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "teste" | "usuario" | "medico" | "gestor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Teste: {
        payload: Prisma.$TestePayload<ExtArgs>
        fields: Prisma.TesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TesteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TesteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          findFirst: {
            args: Prisma.TesteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TesteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          findMany: {
            args: Prisma.TesteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          create: {
            args: Prisma.TesteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          createMany: {
            args: Prisma.TesteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TesteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          delete: {
            args: Prisma.TesteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          update: {
            args: Prisma.TesteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          deleteMany: {
            args: Prisma.TesteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TesteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TesteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          upsert: {
            args: Prisma.TesteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          aggregate: {
            args: Prisma.TesteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeste>
          }
          groupBy: {
            args: Prisma.TesteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TesteCountArgs<ExtArgs>
            result: $Utils.Optional<TesteCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Medico: {
        payload: Prisma.$MedicoPayload<ExtArgs>
        fields: Prisma.MedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findFirst: {
            args: Prisma.MedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findMany: {
            args: Prisma.MedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          create: {
            args: Prisma.MedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          createMany: {
            args: Prisma.MedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          delete: {
            args: Prisma.MedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          update: {
            args: Prisma.MedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          deleteMany: {
            args: Prisma.MedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          upsert: {
            args: Prisma.MedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          aggregate: {
            args: Prisma.MedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico>
          }
          groupBy: {
            args: Prisma.MedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicoCountAggregateOutputType> | number
          }
        }
      }
      Gestor: {
        payload: Prisma.$GestorPayload<ExtArgs>
        fields: Prisma.GestorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GestorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GestorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>
          }
          findFirst: {
            args: Prisma.GestorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GestorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>
          }
          findMany: {
            args: Prisma.GestorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>[]
          }
          create: {
            args: Prisma.GestorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>
          }
          createMany: {
            args: Prisma.GestorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GestorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>[]
          }
          delete: {
            args: Prisma.GestorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>
          }
          update: {
            args: Prisma.GestorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>
          }
          deleteMany: {
            args: Prisma.GestorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GestorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GestorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>[]
          }
          upsert: {
            args: Prisma.GestorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GestorPayload>
          }
          aggregate: {
            args: Prisma.GestorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGestor>
          }
          groupBy: {
            args: Prisma.GestorGroupByArgs<ExtArgs>
            result: $Utils.Optional<GestorGroupByOutputType>[]
          }
          count: {
            args: Prisma.GestorCountArgs<ExtArgs>
            result: $Utils.Optional<GestorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    teste?: TesteOmit
    usuario?: UsuarioOmit
    medico?: MedicoOmit
    gestor?: GestorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Teste
   */

  export type AggregateTeste = {
    _count: TesteCountAggregateOutputType | null
    _avg: TesteAvgAggregateOutputType | null
    _sum: TesteSumAggregateOutputType | null
    _min: TesteMinAggregateOutputType | null
    _max: TesteMaxAggregateOutputType | null
  }

  export type TesteAvgAggregateOutputType = {
    id: number | null
  }

  export type TesteSumAggregateOutputType = {
    id: number | null
  }

  export type TesteMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TesteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TesteCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type TesteAvgAggregateInputType = {
    id?: true
  }

  export type TesteSumAggregateInputType = {
    id?: true
  }

  export type TesteMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TesteMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TesteCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type TesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teste to aggregate.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testes
    **/
    _count?: true | TesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TesteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TesteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TesteMaxAggregateInputType
  }

  export type GetTesteAggregateType<T extends TesteAggregateArgs> = {
        [P in keyof T & keyof AggregateTeste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeste[P]>
      : GetScalarType<T[P], AggregateTeste[P]>
  }




  export type TesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteWhereInput
    orderBy?: TesteOrderByWithAggregationInput | TesteOrderByWithAggregationInput[]
    by: TesteScalarFieldEnum[] | TesteScalarFieldEnum
    having?: TesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TesteCountAggregateInputType | true
    _avg?: TesteAvgAggregateInputType
    _sum?: TesteSumAggregateInputType
    _min?: TesteMinAggregateInputType
    _max?: TesteMaxAggregateInputType
  }

  export type TesteGroupByOutputType = {
    id: number
    nome: string
    _count: TesteCountAggregateOutputType | null
    _avg: TesteAvgAggregateOutputType | null
    _sum: TesteSumAggregateOutputType | null
    _min: TesteMinAggregateOutputType | null
    _max: TesteMaxAggregateOutputType | null
  }

  type GetTesteGroupByPayload<T extends TesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TesteGroupByOutputType[P]>
            : GetScalarType<T[P], TesteGroupByOutputType[P]>
        }
      >
    >


  export type TesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type TesteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["teste"]>

  export type $TestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teste"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["teste"]>
    composites: {}
  }

  type TesteGetPayload<S extends boolean | null | undefined | TesteDefaultArgs> = $Result.GetResult<Prisma.$TestePayload, S>

  type TesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TesteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TesteCountAggregateInputType | true
    }

  export interface TesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teste'], meta: { name: 'Teste' } }
    /**
     * Find zero or one Teste that matches the filter.
     * @param {TesteFindUniqueArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TesteFindUniqueArgs>(args: SelectSubset<T, TesteFindUniqueArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TesteFindUniqueOrThrowArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TesteFindUniqueOrThrowArgs>(args: SelectSubset<T, TesteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindFirstArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TesteFindFirstArgs>(args?: SelectSubset<T, TesteFindFirstArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindFirstOrThrowArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TesteFindFirstOrThrowArgs>(args?: SelectSubset<T, TesteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testes
     * const testes = await prisma.teste.findMany()
     * 
     * // Get first 10 Testes
     * const testes = await prisma.teste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testeWithIdOnly = await prisma.teste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TesteFindManyArgs>(args?: SelectSubset<T, TesteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teste.
     * @param {TesteCreateArgs} args - Arguments to create a Teste.
     * @example
     * // Create one Teste
     * const Teste = await prisma.teste.create({
     *   data: {
     *     // ... data to create a Teste
     *   }
     * })
     * 
     */
    create<T extends TesteCreateArgs>(args: SelectSubset<T, TesteCreateArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testes.
     * @param {TesteCreateManyArgs} args - Arguments to create many Testes.
     * @example
     * // Create many Testes
     * const teste = await prisma.teste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TesteCreateManyArgs>(args?: SelectSubset<T, TesteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testes and returns the data saved in the database.
     * @param {TesteCreateManyAndReturnArgs} args - Arguments to create many Testes.
     * @example
     * // Create many Testes
     * const teste = await prisma.teste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testes and only return the `id`
     * const testeWithIdOnly = await prisma.teste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TesteCreateManyAndReturnArgs>(args?: SelectSubset<T, TesteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teste.
     * @param {TesteDeleteArgs} args - Arguments to delete one Teste.
     * @example
     * // Delete one Teste
     * const Teste = await prisma.teste.delete({
     *   where: {
     *     // ... filter to delete one Teste
     *   }
     * })
     * 
     */
    delete<T extends TesteDeleteArgs>(args: SelectSubset<T, TesteDeleteArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teste.
     * @param {TesteUpdateArgs} args - Arguments to update one Teste.
     * @example
     * // Update one Teste
     * const teste = await prisma.teste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TesteUpdateArgs>(args: SelectSubset<T, TesteUpdateArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testes.
     * @param {TesteDeleteManyArgs} args - Arguments to filter Testes to delete.
     * @example
     * // Delete a few Testes
     * const { count } = await prisma.teste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TesteDeleteManyArgs>(args?: SelectSubset<T, TesteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testes
     * const teste = await prisma.teste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TesteUpdateManyArgs>(args: SelectSubset<T, TesteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testes and returns the data updated in the database.
     * @param {TesteUpdateManyAndReturnArgs} args - Arguments to update many Testes.
     * @example
     * // Update many Testes
     * const teste = await prisma.teste.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testes and only return the `id`
     * const testeWithIdOnly = await prisma.teste.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TesteUpdateManyAndReturnArgs>(args: SelectSubset<T, TesteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teste.
     * @param {TesteUpsertArgs} args - Arguments to update or create a Teste.
     * @example
     * // Update or create a Teste
     * const teste = await prisma.teste.upsert({
     *   create: {
     *     // ... data to create a Teste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teste we want to update
     *   }
     * })
     */
    upsert<T extends TesteUpsertArgs>(args: SelectSubset<T, TesteUpsertArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteCountArgs} args - Arguments to filter Testes to count.
     * @example
     * // Count the number of Testes
     * const count = await prisma.teste.count({
     *   where: {
     *     // ... the filter for the Testes we want to count
     *   }
     * })
    **/
    count<T extends TesteCountArgs>(
      args?: Subset<T, TesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TesteAggregateArgs>(args: Subset<T, TesteAggregateArgs>): Prisma.PrismaPromise<GetTesteAggregateType<T>>

    /**
     * Group by Teste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TesteGroupByArgs['orderBy'] }
        : { orderBy?: TesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teste model
   */
  readonly fields: TesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teste model
   */
  interface TesteFieldRefs {
    readonly id: FieldRef<"Teste", 'Int'>
    readonly nome: FieldRef<"Teste", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teste findUnique
   */
  export type TesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste findUniqueOrThrow
   */
  export type TesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste findFirst
   */
  export type TesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testes.
     */
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste findFirstOrThrow
   */
  export type TesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testes.
     */
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste findMany
   */
  export type TesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Filter, which Testes to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste create
   */
  export type TesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data needed to create a Teste.
     */
    data: XOR<TesteCreateInput, TesteUncheckedCreateInput>
  }

  /**
   * Teste createMany
   */
  export type TesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testes.
     */
    data: TesteCreateManyInput | TesteCreateManyInput[]
  }

  /**
   * Teste createManyAndReturn
   */
  export type TesteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data used to create many Testes.
     */
    data: TesteCreateManyInput | TesteCreateManyInput[]
  }

  /**
   * Teste update
   */
  export type TesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data needed to update a Teste.
     */
    data: XOR<TesteUpdateInput, TesteUncheckedUpdateInput>
    /**
     * Choose, which Teste to update.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste updateMany
   */
  export type TesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testes.
     */
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyInput>
    /**
     * Filter which Testes to update
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to update.
     */
    limit?: number
  }

  /**
   * Teste updateManyAndReturn
   */
  export type TesteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data used to update Testes.
     */
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyInput>
    /**
     * Filter which Testes to update
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to update.
     */
    limit?: number
  }

  /**
   * Teste upsert
   */
  export type TesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The filter to search for the Teste to update in case it exists.
     */
    where: TesteWhereUniqueInput
    /**
     * In case the Teste found by the `where` argument doesn't exist, create a new Teste with this data.
     */
    create: XOR<TesteCreateInput, TesteUncheckedCreateInput>
    /**
     * In case the Teste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TesteUpdateInput, TesteUncheckedUpdateInput>
  }

  /**
   * Teste delete
   */
  export type TesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Filter which Teste to delete.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste deleteMany
   */
  export type TesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testes to delete
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to delete.
     */
    limit?: number
  }

  /**
   * Teste without action
   */
  export type TesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    idade: number | null
    telefone: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    idade: number | null
    telefone: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    idade: number | null
    CPF: string | null
    email: string | null
    telefone: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    idade: number | null
    CPF: string | null
    email: string | null
    telefone: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    idade: number
    CPF: number
    email: number
    telefone: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    idade?: true
    telefone?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    idade?: true
    telefone?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    idade?: true
    CPF?: true
    email?: true
    telefone?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    idade?: true
    CPF?: true
    email?: true
    telefone?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    idade?: true
    CPF?: true
    email?: true
    telefone?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    telefone: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    telefone?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "idade" | "CPF" | "email" | "telefone", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      sobrenome: string
      idade: number
      CPF: string
      email: string
      telefone: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly sobrenome: FieldRef<"Usuario", 'String'>
    readonly idade: FieldRef<"Usuario", 'Int'>
    readonly CPF: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Medico
   */

  export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoAvgAggregateOutputType = {
    id: number | null
    idade: number | null
    telefone: number | null
  }

  export type MedicoSumAggregateOutputType = {
    id: number | null
    idade: number | null
    telefone: number | null
  }

  export type MedicoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    idade: number | null
    CPF: string | null
    email: string | null
    CRM: string | null
    telefone: number | null
  }

  export type MedicoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    idade: number | null
    CPF: string | null
    email: string | null
    CRM: string | null
    telefone: number | null
  }

  export type MedicoCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    idade: number
    CPF: number
    email: number
    CRM: number
    telefone: number
    _all: number
  }


  export type MedicoAvgAggregateInputType = {
    id?: true
    idade?: true
    telefone?: true
  }

  export type MedicoSumAggregateInputType = {
    id?: true
    idade?: true
    telefone?: true
  }

  export type MedicoMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    idade?: true
    CPF?: true
    email?: true
    CRM?: true
    telefone?: true
  }

  export type MedicoMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    idade?: true
    CPF?: true
    email?: true
    CRM?: true
    telefone?: true
  }

  export type MedicoCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    idade?: true
    CPF?: true
    email?: true
    CRM?: true
    telefone?: true
    _all?: true
  }

  export type MedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType
  }

  export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico[P]>
      : GetScalarType<T[P], AggregateMedico[P]>
  }




  export type MedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithAggregationInput | MedicoOrderByWithAggregationInput[]
    by: MedicoScalarFieldEnum[] | MedicoScalarFieldEnum
    having?: MedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicoCountAggregateInputType | true
    _avg?: MedicoAvgAggregateInputType
    _sum?: MedicoSumAggregateInputType
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    id: number
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    CRM: string
    telefone: number
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicoGroupByOutputType[P]>
        }
      >
    >


  export type MedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    CRM?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    CRM?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    CRM?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    CPF?: boolean
    email?: boolean
    CRM?: boolean
    telefone?: boolean
  }

  export type MedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "idade" | "CPF" | "email" | "CRM" | "telefone", ExtArgs["result"]["medico"]>

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      sobrenome: string
      idade: number
      CPF: string
      email: string
      CRM: string
      telefone: number
    }, ExtArgs["result"]["medico"]>
    composites: {}
  }

  type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = $Result.GetResult<Prisma.$MedicoPayload, S>

  type MedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicoCountAggregateInputType | true
    }

  export interface MedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico'], meta: { name: 'Medico' } }
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicoWithIdOnly = await prisma.medico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicoFindManyArgs>(args?: SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     * 
     */
    create<T extends MedicoCreateArgs>(args: SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicoCreateManyArgs>(args?: SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicos and returns the data saved in the database.
     * @param {MedicoCreateManyAndReturnArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicos and only return the `id`
     * const medicoWithIdOnly = await prisma.medico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     * 
     */
    delete<T extends MedicoDeleteArgs>(args: SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicoUpdateArgs>(args: SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos and returns the data updated in the database.
     * @param {MedicoUpdateManyAndReturnArgs} args - Arguments to update many Medicos.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicos and only return the `id`
     * const medicoWithIdOnly = await prisma.medico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicoUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(
      args?: Subset<T, MedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicoAggregateArgs>(args: Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>

    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicoGroupByArgs['orderBy'] }
        : { orderBy?: MedicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico model
   */
  readonly fields: MedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medico model
   */
  interface MedicoFieldRefs {
    readonly id: FieldRef<"Medico", 'Int'>
    readonly nome: FieldRef<"Medico", 'String'>
    readonly sobrenome: FieldRef<"Medico", 'String'>
    readonly idade: FieldRef<"Medico", 'Int'>
    readonly CPF: FieldRef<"Medico", 'String'>
    readonly email: FieldRef<"Medico", 'String'>
    readonly CRM: FieldRef<"Medico", 'String'>
    readonly telefone: FieldRef<"Medico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medico findUnique
   */
  export type MedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findUniqueOrThrow
   */
  export type MedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findFirst
   */
  export type MedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findFirstOrThrow
   */
  export type MedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findMany
   */
  export type MedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Filter, which Medicos to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico create
   */
  export type MedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data needed to create a Medico.
     */
    data: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
  }

  /**
   * Medico createMany
   */
  export type MedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
  }

  /**
   * Medico createManyAndReturn
   */
  export type MedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
  }

  /**
   * Medico update
   */
  export type MedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data needed to update a Medico.
     */
    data: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
    /**
     * Choose, which Medico to update.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico updateMany
   */
  export type MedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
  }

  /**
   * Medico updateManyAndReturn
   */
  export type MedicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
  }

  /**
   * Medico upsert
   */
  export type MedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: MedicoWhereUniqueInput
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
  }

  /**
   * Medico delete
   */
  export type MedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Filter which Medico to delete.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico deleteMany
   */
  export type MedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to delete.
     */
    limit?: number
  }

  /**
   * Medico without action
   */
  export type MedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
  }


  /**
   * Model Gestor
   */

  export type AggregateGestor = {
    _count: GestorCountAggregateOutputType | null
    _avg: GestorAvgAggregateOutputType | null
    _sum: GestorSumAggregateOutputType | null
    _min: GestorMinAggregateOutputType | null
    _max: GestorMaxAggregateOutputType | null
  }

  export type GestorAvgAggregateOutputType = {
    codigo: number | null
  }

  export type GestorSumAggregateOutputType = {
    codigo: number | null
  }

  export type GestorMinAggregateOutputType = {
    codigo: number | null
    nome: string | null
    sobrenome: string | null
  }

  export type GestorMaxAggregateOutputType = {
    codigo: number | null
    nome: string | null
    sobrenome: string | null
  }

  export type GestorCountAggregateOutputType = {
    codigo: number
    nome: number
    sobrenome: number
    _all: number
  }


  export type GestorAvgAggregateInputType = {
    codigo?: true
  }

  export type GestorSumAggregateInputType = {
    codigo?: true
  }

  export type GestorMinAggregateInputType = {
    codigo?: true
    nome?: true
    sobrenome?: true
  }

  export type GestorMaxAggregateInputType = {
    codigo?: true
    nome?: true
    sobrenome?: true
  }

  export type GestorCountAggregateInputType = {
    codigo?: true
    nome?: true
    sobrenome?: true
    _all?: true
  }

  export type GestorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gestor to aggregate.
     */
    where?: GestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gestors to fetch.
     */
    orderBy?: GestorOrderByWithRelationInput | GestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gestors
    **/
    _count?: true | GestorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GestorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GestorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GestorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GestorMaxAggregateInputType
  }

  export type GetGestorAggregateType<T extends GestorAggregateArgs> = {
        [P in keyof T & keyof AggregateGestor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGestor[P]>
      : GetScalarType<T[P], AggregateGestor[P]>
  }




  export type GestorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GestorWhereInput
    orderBy?: GestorOrderByWithAggregationInput | GestorOrderByWithAggregationInput[]
    by: GestorScalarFieldEnum[] | GestorScalarFieldEnum
    having?: GestorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GestorCountAggregateInputType | true
    _avg?: GestorAvgAggregateInputType
    _sum?: GestorSumAggregateInputType
    _min?: GestorMinAggregateInputType
    _max?: GestorMaxAggregateInputType
  }

  export type GestorGroupByOutputType = {
    codigo: number
    nome: string
    sobrenome: string
    _count: GestorCountAggregateOutputType | null
    _avg: GestorAvgAggregateOutputType | null
    _sum: GestorSumAggregateOutputType | null
    _min: GestorMinAggregateOutputType | null
    _max: GestorMaxAggregateOutputType | null
  }

  type GetGestorGroupByPayload<T extends GestorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GestorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GestorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GestorGroupByOutputType[P]>
            : GetScalarType<T[P], GestorGroupByOutputType[P]>
        }
      >
    >


  export type GestorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    sobrenome?: boolean
  }, ExtArgs["result"]["gestor"]>

  export type GestorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    sobrenome?: boolean
  }, ExtArgs["result"]["gestor"]>

  export type GestorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    sobrenome?: boolean
  }, ExtArgs["result"]["gestor"]>

  export type GestorSelectScalar = {
    codigo?: boolean
    nome?: boolean
    sobrenome?: boolean
  }

  export type GestorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "nome" | "sobrenome", ExtArgs["result"]["gestor"]>

  export type $GestorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gestor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      nome: string
      sobrenome: string
    }, ExtArgs["result"]["gestor"]>
    composites: {}
  }

  type GestorGetPayload<S extends boolean | null | undefined | GestorDefaultArgs> = $Result.GetResult<Prisma.$GestorPayload, S>

  type GestorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GestorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GestorCountAggregateInputType | true
    }

  export interface GestorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gestor'], meta: { name: 'Gestor' } }
    /**
     * Find zero or one Gestor that matches the filter.
     * @param {GestorFindUniqueArgs} args - Arguments to find a Gestor
     * @example
     * // Get one Gestor
     * const gestor = await prisma.gestor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GestorFindUniqueArgs>(args: SelectSubset<T, GestorFindUniqueArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gestor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GestorFindUniqueOrThrowArgs} args - Arguments to find a Gestor
     * @example
     * // Get one Gestor
     * const gestor = await prisma.gestor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GestorFindUniqueOrThrowArgs>(args: SelectSubset<T, GestorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gestor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorFindFirstArgs} args - Arguments to find a Gestor
     * @example
     * // Get one Gestor
     * const gestor = await prisma.gestor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GestorFindFirstArgs>(args?: SelectSubset<T, GestorFindFirstArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gestor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorFindFirstOrThrowArgs} args - Arguments to find a Gestor
     * @example
     * // Get one Gestor
     * const gestor = await prisma.gestor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GestorFindFirstOrThrowArgs>(args?: SelectSubset<T, GestorFindFirstOrThrowArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gestors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gestors
     * const gestors = await prisma.gestor.findMany()
     * 
     * // Get first 10 Gestors
     * const gestors = await prisma.gestor.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const gestorWithCodigoOnly = await prisma.gestor.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends GestorFindManyArgs>(args?: SelectSubset<T, GestorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gestor.
     * @param {GestorCreateArgs} args - Arguments to create a Gestor.
     * @example
     * // Create one Gestor
     * const Gestor = await prisma.gestor.create({
     *   data: {
     *     // ... data to create a Gestor
     *   }
     * })
     * 
     */
    create<T extends GestorCreateArgs>(args: SelectSubset<T, GestorCreateArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gestors.
     * @param {GestorCreateManyArgs} args - Arguments to create many Gestors.
     * @example
     * // Create many Gestors
     * const gestor = await prisma.gestor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GestorCreateManyArgs>(args?: SelectSubset<T, GestorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gestors and returns the data saved in the database.
     * @param {GestorCreateManyAndReturnArgs} args - Arguments to create many Gestors.
     * @example
     * // Create many Gestors
     * const gestor = await prisma.gestor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gestors and only return the `codigo`
     * const gestorWithCodigoOnly = await prisma.gestor.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GestorCreateManyAndReturnArgs>(args?: SelectSubset<T, GestorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gestor.
     * @param {GestorDeleteArgs} args - Arguments to delete one Gestor.
     * @example
     * // Delete one Gestor
     * const Gestor = await prisma.gestor.delete({
     *   where: {
     *     // ... filter to delete one Gestor
     *   }
     * })
     * 
     */
    delete<T extends GestorDeleteArgs>(args: SelectSubset<T, GestorDeleteArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gestor.
     * @param {GestorUpdateArgs} args - Arguments to update one Gestor.
     * @example
     * // Update one Gestor
     * const gestor = await prisma.gestor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GestorUpdateArgs>(args: SelectSubset<T, GestorUpdateArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gestors.
     * @param {GestorDeleteManyArgs} args - Arguments to filter Gestors to delete.
     * @example
     * // Delete a few Gestors
     * const { count } = await prisma.gestor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GestorDeleteManyArgs>(args?: SelectSubset<T, GestorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gestors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gestors
     * const gestor = await prisma.gestor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GestorUpdateManyArgs>(args: SelectSubset<T, GestorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gestors and returns the data updated in the database.
     * @param {GestorUpdateManyAndReturnArgs} args - Arguments to update many Gestors.
     * @example
     * // Update many Gestors
     * const gestor = await prisma.gestor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gestors and only return the `codigo`
     * const gestorWithCodigoOnly = await prisma.gestor.updateManyAndReturn({
     *   select: { codigo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GestorUpdateManyAndReturnArgs>(args: SelectSubset<T, GestorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gestor.
     * @param {GestorUpsertArgs} args - Arguments to update or create a Gestor.
     * @example
     * // Update or create a Gestor
     * const gestor = await prisma.gestor.upsert({
     *   create: {
     *     // ... data to create a Gestor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gestor we want to update
     *   }
     * })
     */
    upsert<T extends GestorUpsertArgs>(args: SelectSubset<T, GestorUpsertArgs<ExtArgs>>): Prisma__GestorClient<$Result.GetResult<Prisma.$GestorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gestors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorCountArgs} args - Arguments to filter Gestors to count.
     * @example
     * // Count the number of Gestors
     * const count = await prisma.gestor.count({
     *   where: {
     *     // ... the filter for the Gestors we want to count
     *   }
     * })
    **/
    count<T extends GestorCountArgs>(
      args?: Subset<T, GestorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GestorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gestor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GestorAggregateArgs>(args: Subset<T, GestorAggregateArgs>): Prisma.PrismaPromise<GetGestorAggregateType<T>>

    /**
     * Group by Gestor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GestorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GestorGroupByArgs['orderBy'] }
        : { orderBy?: GestorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GestorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGestorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gestor model
   */
  readonly fields: GestorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gestor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GestorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gestor model
   */
  interface GestorFieldRefs {
    readonly codigo: FieldRef<"Gestor", 'Int'>
    readonly nome: FieldRef<"Gestor", 'String'>
    readonly sobrenome: FieldRef<"Gestor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gestor findUnique
   */
  export type GestorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * Filter, which Gestor to fetch.
     */
    where: GestorWhereUniqueInput
  }

  /**
   * Gestor findUniqueOrThrow
   */
  export type GestorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * Filter, which Gestor to fetch.
     */
    where: GestorWhereUniqueInput
  }

  /**
   * Gestor findFirst
   */
  export type GestorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * Filter, which Gestor to fetch.
     */
    where?: GestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gestors to fetch.
     */
    orderBy?: GestorOrderByWithRelationInput | GestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gestors.
     */
    cursor?: GestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gestors.
     */
    distinct?: GestorScalarFieldEnum | GestorScalarFieldEnum[]
  }

  /**
   * Gestor findFirstOrThrow
   */
  export type GestorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * Filter, which Gestor to fetch.
     */
    where?: GestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gestors to fetch.
     */
    orderBy?: GestorOrderByWithRelationInput | GestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gestors.
     */
    cursor?: GestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gestors.
     */
    distinct?: GestorScalarFieldEnum | GestorScalarFieldEnum[]
  }

  /**
   * Gestor findMany
   */
  export type GestorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * Filter, which Gestors to fetch.
     */
    where?: GestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gestors to fetch.
     */
    orderBy?: GestorOrderByWithRelationInput | GestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gestors.
     */
    cursor?: GestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gestors.
     */
    skip?: number
    distinct?: GestorScalarFieldEnum | GestorScalarFieldEnum[]
  }

  /**
   * Gestor create
   */
  export type GestorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * The data needed to create a Gestor.
     */
    data: XOR<GestorCreateInput, GestorUncheckedCreateInput>
  }

  /**
   * Gestor createMany
   */
  export type GestorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gestors.
     */
    data: GestorCreateManyInput | GestorCreateManyInput[]
  }

  /**
   * Gestor createManyAndReturn
   */
  export type GestorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * The data used to create many Gestors.
     */
    data: GestorCreateManyInput | GestorCreateManyInput[]
  }

  /**
   * Gestor update
   */
  export type GestorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * The data needed to update a Gestor.
     */
    data: XOR<GestorUpdateInput, GestorUncheckedUpdateInput>
    /**
     * Choose, which Gestor to update.
     */
    where: GestorWhereUniqueInput
  }

  /**
   * Gestor updateMany
   */
  export type GestorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gestors.
     */
    data: XOR<GestorUpdateManyMutationInput, GestorUncheckedUpdateManyInput>
    /**
     * Filter which Gestors to update
     */
    where?: GestorWhereInput
    /**
     * Limit how many Gestors to update.
     */
    limit?: number
  }

  /**
   * Gestor updateManyAndReturn
   */
  export type GestorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * The data used to update Gestors.
     */
    data: XOR<GestorUpdateManyMutationInput, GestorUncheckedUpdateManyInput>
    /**
     * Filter which Gestors to update
     */
    where?: GestorWhereInput
    /**
     * Limit how many Gestors to update.
     */
    limit?: number
  }

  /**
   * Gestor upsert
   */
  export type GestorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * The filter to search for the Gestor to update in case it exists.
     */
    where: GestorWhereUniqueInput
    /**
     * In case the Gestor found by the `where` argument doesn't exist, create a new Gestor with this data.
     */
    create: XOR<GestorCreateInput, GestorUncheckedCreateInput>
    /**
     * In case the Gestor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GestorUpdateInput, GestorUncheckedUpdateInput>
  }

  /**
   * Gestor delete
   */
  export type GestorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
    /**
     * Filter which Gestor to delete.
     */
    where: GestorWhereUniqueInput
  }

  /**
   * Gestor deleteMany
   */
  export type GestorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gestors to delete
     */
    where?: GestorWhereInput
    /**
     * Limit how many Gestors to delete.
     */
    limit?: number
  }

  /**
   * Gestor without action
   */
  export type GestorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gestor
     */
    select?: GestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gestor
     */
    omit?: GestorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TesteScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type TesteScalarFieldEnum = (typeof TesteScalarFieldEnum)[keyof typeof TesteScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    idade: 'idade',
    CPF: 'CPF',
    email: 'email',
    telefone: 'telefone'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    idade: 'idade',
    CPF: 'CPF',
    email: 'email',
    CRM: 'CRM',
    telefone: 'telefone'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const GestorScalarFieldEnum: {
    codigo: 'codigo',
    nome: 'nome',
    sobrenome: 'sobrenome'
  };

  export type GestorScalarFieldEnum = (typeof GestorScalarFieldEnum)[keyof typeof GestorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TesteWhereInput = {
    AND?: TesteWhereInput | TesteWhereInput[]
    OR?: TesteWhereInput[]
    NOT?: TesteWhereInput | TesteWhereInput[]
    id?: IntFilter<"Teste"> | number
    nome?: StringFilter<"Teste"> | string
  }

  export type TesteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TesteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TesteWhereInput | TesteWhereInput[]
    OR?: TesteWhereInput[]
    NOT?: TesteWhereInput | TesteWhereInput[]
    nome?: StringFilter<"Teste"> | string
  }, "id">

  export type TesteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: TesteCountOrderByAggregateInput
    _avg?: TesteAvgOrderByAggregateInput
    _max?: TesteMaxOrderByAggregateInput
    _min?: TesteMinOrderByAggregateInput
    _sum?: TesteSumOrderByAggregateInput
  }

  export type TesteScalarWhereWithAggregatesInput = {
    AND?: TesteScalarWhereWithAggregatesInput | TesteScalarWhereWithAggregatesInput[]
    OR?: TesteScalarWhereWithAggregatesInput[]
    NOT?: TesteScalarWhereWithAggregatesInput | TesteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teste"> | number
    nome?: StringWithAggregatesFilter<"Teste"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    idade?: IntFilter<"Usuario"> | number
    CPF?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: IntNullableFilter<"Usuario"> | number | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    CPF?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    idade?: IntFilter<"Usuario"> | number
    telefone?: IntNullableFilter<"Usuario"> | number | null
  }, "id" | "CPF" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    sobrenome?: StringWithAggregatesFilter<"Usuario"> | string
    idade?: IntWithAggregatesFilter<"Usuario"> | number
    CPF?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    id?: IntFilter<"Medico"> | number
    nome?: StringFilter<"Medico"> | string
    sobrenome?: StringFilter<"Medico"> | string
    idade?: IntFilter<"Medico"> | number
    CPF?: StringFilter<"Medico"> | string
    email?: StringFilter<"Medico"> | string
    CRM?: StringFilter<"Medico"> | string
    telefone?: IntFilter<"Medico"> | number
  }

  export type MedicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    CRM?: SortOrder
    telefone?: SortOrder
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    CPF?: string
    email?: string
    CRM?: string
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    nome?: StringFilter<"Medico"> | string
    sobrenome?: StringFilter<"Medico"> | string
    idade?: IntFilter<"Medico"> | number
    telefone?: IntFilter<"Medico"> | number
  }, "id" | "CPF" | "email" | "CRM">

  export type MedicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    CRM?: SortOrder
    telefone?: SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _avg?: MedicoAvgOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
    _sum?: MedicoSumOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medico"> | number
    nome?: StringWithAggregatesFilter<"Medico"> | string
    sobrenome?: StringWithAggregatesFilter<"Medico"> | string
    idade?: IntWithAggregatesFilter<"Medico"> | number
    CPF?: StringWithAggregatesFilter<"Medico"> | string
    email?: StringWithAggregatesFilter<"Medico"> | string
    CRM?: StringWithAggregatesFilter<"Medico"> | string
    telefone?: IntWithAggregatesFilter<"Medico"> | number
  }

  export type GestorWhereInput = {
    AND?: GestorWhereInput | GestorWhereInput[]
    OR?: GestorWhereInput[]
    NOT?: GestorWhereInput | GestorWhereInput[]
    codigo?: IntFilter<"Gestor"> | number
    nome?: StringFilter<"Gestor"> | string
    sobrenome?: StringFilter<"Gestor"> | string
  }

  export type GestorOrderByWithRelationInput = {
    codigo?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
  }

  export type GestorWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    AND?: GestorWhereInput | GestorWhereInput[]
    OR?: GestorWhereInput[]
    NOT?: GestorWhereInput | GestorWhereInput[]
    nome?: StringFilter<"Gestor"> | string
    sobrenome?: StringFilter<"Gestor"> | string
  }, "codigo">

  export type GestorOrderByWithAggregationInput = {
    codigo?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    _count?: GestorCountOrderByAggregateInput
    _avg?: GestorAvgOrderByAggregateInput
    _max?: GestorMaxOrderByAggregateInput
    _min?: GestorMinOrderByAggregateInput
    _sum?: GestorSumOrderByAggregateInput
  }

  export type GestorScalarWhereWithAggregatesInput = {
    AND?: GestorScalarWhereWithAggregatesInput | GestorScalarWhereWithAggregatesInput[]
    OR?: GestorScalarWhereWithAggregatesInput[]
    NOT?: GestorScalarWhereWithAggregatesInput | GestorScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"Gestor"> | number
    nome?: StringWithAggregatesFilter<"Gestor"> | string
    sobrenome?: StringWithAggregatesFilter<"Gestor"> | string
  }

  export type TesteCreateInput = {
    nome: string
  }

  export type TesteUncheckedCreateInput = {
    id?: number
    nome: string
  }

  export type TesteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TesteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TesteCreateManyInput = {
    id?: number
    nome: string
  }

  export type TesteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TesteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    telefone?: number | null
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    telefone?: number | null
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    telefone?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MedicoCreateInput = {
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    CRM: string
    telefone: number
  }

  export type MedicoUncheckedCreateInput = {
    id?: number
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    CRM: string
    telefone: number
  }

  export type MedicoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CRM?: StringFieldUpdateOperationsInput | string
    telefone?: IntFieldUpdateOperationsInput | number
  }

  export type MedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CRM?: StringFieldUpdateOperationsInput | string
    telefone?: IntFieldUpdateOperationsInput | number
  }

  export type MedicoCreateManyInput = {
    id?: number
    nome: string
    sobrenome: string
    idade: number
    CPF: string
    email: string
    CRM: string
    telefone: number
  }

  export type MedicoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CRM?: StringFieldUpdateOperationsInput | string
    telefone?: IntFieldUpdateOperationsInput | number
  }

  export type MedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    CPF?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CRM?: StringFieldUpdateOperationsInput | string
    telefone?: IntFieldUpdateOperationsInput | number
  }

  export type GestorCreateInput = {
    nome: string
    sobrenome: string
  }

  export type GestorUncheckedCreateInput = {
    codigo?: number
    nome: string
    sobrenome: string
  }

  export type GestorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
  }

  export type GestorUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
  }

  export type GestorCreateManyInput = {
    codigo?: number
    nome: string
    sobrenome: string
  }

  export type GestorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
  }

  export type GestorUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TesteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TesteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TesteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TesteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TesteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    telefone?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MedicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    CRM?: SortOrder
    telefone?: SortOrder
  }

  export type MedicoAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    telefone?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    CRM?: SortOrder
    telefone?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    CPF?: SortOrder
    email?: SortOrder
    CRM?: SortOrder
    telefone?: SortOrder
  }

  export type MedicoSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    telefone?: SortOrder
  }

  export type GestorCountOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
  }

  export type GestorAvgOrderByAggregateInput = {
    codigo?: SortOrder
  }

  export type GestorMaxOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
  }

  export type GestorMinOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
  }

  export type GestorSumOrderByAggregateInput = {
    codigo?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}