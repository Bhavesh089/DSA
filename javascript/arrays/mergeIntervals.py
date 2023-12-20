def intervalss(intervals, new_interval):
    # Parse intervals
    intervals = [list(interval) for interval in intervals]
    
    # Access elements of new_interval
    s, e = new_interval[1], new_interval[0]
    ans = []

    for i in range(len(intervals)):
        if s > intervals[i][1]:
            ans.append(intervals[i])
        elif e < intervals[i][0]:
            ans.append([s, e])

            for j in range(i, len(intervals)):
                ans.append(intervals[i])
            return ans
        else:
            s = min(s, intervals[i][0])
            e = max(e, intervals[i][1])

    ans.append([s, e])

    return ans

print(intervalss([(1, 2), (3, 6)], (10, 8)))