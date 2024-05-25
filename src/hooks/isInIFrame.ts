export function isInIFrame() {
    try {
        if (window.location !== window.parent.location) return true;
    } catch (e) { }
    return false;
}