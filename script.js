function deepEquals(a, b) {
 if (a === b) {
    // Handle NaN case
    // if (Number.isNaN(a) && Number.isNaN(b)) {
    //   return true;
    // }
    return true;
  }

  if (Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    }

  // Check for different types
  if (typeof a !== typeof b) {
    return false;
  }

  // Check for null and undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return false;
  }

  // Check for arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  // Check for objects
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (let i = 0; i < keysA.length; i++) {
      const key = keysA[i];
      if (!deepEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  // Handle other types
  return false;
}

module.exports=deepEquals;
