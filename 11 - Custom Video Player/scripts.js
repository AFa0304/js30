const video = document.querySelector(".player__video")
const toggleButton = document.querySelector(".toggle")
const volumeRange = document.querySelector("input[name='volume']")
const playbackRateRange = document.querySelector("input[name='playbackRate']")
const skipButtons = document.querySelectorAll("[data-skip]")
const progress = document.querySelector(".progress")
const progress_filled = document.querySelector(".progress__filled")

function togglePlay() {
    console.dir(video)
    video.paused ? video.play() : video.pause()
}

function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggleButton.textContent = icon
}

function controlVolumn() {
    video.volume = this.value
}

function controlRate() {
    video.playbackRate = this.value
}

function skipVideo() {
    console.log(this.getAttribute("data-skip"))
    video.currentTime = video.currentTime + parseInt(this.getAttribute("data-skip"))
}

function handleProgress(e) {
    const percent = e.offsetX / progress.clientWidth
    video.currentTime = percent * video.duration
}

function updateProgress() {
    progress_filled.style.flexBasis = video.currentTime / video.duration * 100 + "%"
}

toggleButton.addEventListener("click", togglePlay)
// 音量控制
volumeRange.addEventListener("change", controlVolumn)
volumeRange.addEventListener("mousemove", controlVolumn)
// 速率控制
playbackRateRange.addEventListener("change", controlRate)
playbackRateRange.addEventListener("mousemove", controlRate)
// 影片控制
video.addEventListener("click", togglePlay)
video.addEventListener("timeupdate", updateProgress)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
// 進度調控制
let isMousedown = false
progress.addEventListener("click", handleProgress)
progress.addEventListener("mousemove", (e)=> { isMousedown && handleProgress(e)})
progress.addEventListener("mousedown", () => { isMousedown = true })
progress.addEventListener("mouseup", () => { isMousedown = false })
// 跳轉按鈕
skipButtons.forEach(skipButton => {
    skipButton.addEventListener("click", skipVideo)
})

