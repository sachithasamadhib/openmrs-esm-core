/** @module @category Offline */
import { v4 } from 'uuid';

export const offlineUuidPrefix = 'OFFLINE+';

/** Generates a UUID-like string which is used for uniquely identifying objects while offline. */
export function generateOfflineUuid() {
  return offlineUuidPrefix + v4();
}

/** Checks whether the given string has the format of an offline UUID generated by {@link generateOfflineUuid} */
export function isOfflineUuid(uuid: string) {
  return uuid.startsWith(offlineUuidPrefix);
}
