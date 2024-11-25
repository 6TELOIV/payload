/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    'disable-publish': DisablePublish;
    posts: Post;
    'autosave-posts': AutosavePost;
    'draft-posts': DraftPost;
    'draft-with-max-posts': DraftWithMaxPost;
    'localized-posts': LocalizedPost;
    'version-posts': VersionPost;
    'custom-ids': CustomId;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    'disable-publish': DisablePublishSelect<false> | DisablePublishSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    'autosave-posts': AutosavePostsSelect<false> | AutosavePostsSelect<true>;
    'draft-posts': DraftPostsSelect<false> | DraftPostsSelect<true>;
    'draft-with-max-posts': DraftWithMaxPostsSelect<false> | DraftWithMaxPostsSelect<true>;
    'localized-posts': LocalizedPostsSelect<false> | LocalizedPostsSelect<true>;
    'version-posts': VersionPostsSelect<false> | VersionPostsSelect<true>;
    'custom-ids': CustomIdsSelect<false> | CustomIdsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'autosave-global': AutosaveGlobal;
    'draft-global': DraftGlobal;
    'draft-with-max-global': DraftWithMaxGlobal;
    'disable-publish-global': DisablePublishGlobal;
    'localized-global': LocalizedGlobal;
  };
  globalsSelect: {
    'autosave-global': AutosaveGlobalSelect<false> | AutosaveGlobalSelect<true>;
    'draft-global': DraftGlobalSelect<false> | DraftGlobalSelect<true>;
    'draft-with-max-global': DraftWithMaxGlobalSelect<false> | DraftWithMaxGlobalSelect<true>;
    'disable-publish-global': DisablePublishGlobalSelect<false> | DisablePublishGlobalSelect<true>;
    'localized-global': LocalizedGlobalSelect<false> | LocalizedGlobalSelect<true>;
  };
  locale: 'en' | 'es' | 'de';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish".
 */
export interface DisablePublish {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  relationToAutosaves?: (string | null) | AutosavePost;
  relationToVersions?: (string | null) | VersionPost;
  relationToDrafts?: (string | null) | DraftPost;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-posts".
 */
export interface AutosavePost {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "version-posts".
 */
export interface VersionPost {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-posts".
 */
export interface DraftPost {
  id: string;
  title: string;
  description: string;
  radio?: 'test' | null;
  select?: ('test1' | 'test2')[] | null;
  blocksField?:
    | {
        text?: string | null;
        localized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  relation?: (string | null) | DraftPost;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-posts".
 */
export interface DraftWithMaxPost {
  id: string;
  title: string;
  description: string;
  radio?: 'test' | null;
  select?: ('test1' | 'test2')[] | null;
  blocksField?:
    | {
        text?: string | null;
        localized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  relation?: (string | null) | DraftWithMaxPost;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: string;
  text?: string | null;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-ids".
 */
export interface CustomId {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'disable-publish';
        value: string | DisablePublish;
      } | null)
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'autosave-posts';
        value: string | AutosavePost;
      } | null)
    | ({
        relationTo: 'draft-posts';
        value: string | DraftPost;
      } | null)
    | ({
        relationTo: 'draft-with-max-posts';
        value: string | DraftWithMaxPost;
      } | null)
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'version-posts';
        value: string | VersionPost;
      } | null)
    | ({
        relationTo: 'custom-ids';
        value: string | CustomId;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish_select".
 */
export interface DisablePublishSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  relationToAutosaves?: T;
  relationToVersions?: T;
  relationToDrafts?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-posts_select".
 */
export interface AutosavePostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-posts_select".
 */
export interface DraftPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  radio?: T;
  select?: T;
  blocksField?:
    | T
    | {
        block?:
          | T
          | {
              text?: T;
              localized?: T;
              id?: T;
              blockName?: T;
            };
      };
  relation?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-posts_select".
 */
export interface DraftWithMaxPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  radio?: T;
  select?: T;
  blocksField?:
    | T
    | {
        block?:
          | T
          | {
              text?: T;
              localized?: T;
              id?: T;
              blockName?: T;
            };
      };
  relation?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts_select".
 */
export interface LocalizedPostsSelect<T extends boolean = true> {
  text?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "version-posts_select".
 */
export interface VersionPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-ids_select".
 */
export interface CustomIdsSelect<T extends boolean = true> {
  id?: T;
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-global".
 */
export interface AutosaveGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-global".
 */
export interface DraftGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-global".
 */
export interface DraftWithMaxGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish-global".
 */
export interface DisablePublishGlobal {
  id: string;
  title?: string | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-global".
 */
export interface LocalizedGlobal {
  id: string;
  title?: string | null;
  content?: string | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-global_select".
 */
export interface AutosaveGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-global_select".
 */
export interface DraftGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-global_select".
 */
export interface DraftWithMaxGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish-global_select".
 */
export interface DisablePublishGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-global_select".
 */
export interface LocalizedGlobalSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}