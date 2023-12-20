const solve = (A, B, C) => {
  const checkMid = (A, B, C, mid) => {
    count = 1
    total = 0
    for (let x of C) {
        console.log(x,'---->')
      total += parseInt(x)

      console.log(total,'--->')

      if (total > mid) {
        count += 1
        total = x
      }
    }

    console.log(count)

    if (count > A) {
      return false
    } else {
      return true
    }
  }

  l = Math.max(...C)
  h = C.reduce((a, b) => a + b, 0)

  console.log(l, h)
  while (l <= h) {
    mid = (l + h) >> 1
   console.log(mid,'this mid')
    if (checkMid(A, B, C, mid)) {
        console.log(mid, "inside mid")
      ans = mid

      h = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans * B
}

console.log(solve(2, 5, [1, 10]))

// A = 2
// B = 5
// C = [1, 10]