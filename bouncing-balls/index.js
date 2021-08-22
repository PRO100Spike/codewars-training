function bouncingBall(h,  bounce,  window) {
    let newH = h * bounce;
    if (h <= 0 || bounce < 0 || bounce > 1 || window > h || newH < window) {
        return -1
    }
    return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
}