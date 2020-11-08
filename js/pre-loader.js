
/* ===================================================================
 * # preloader
 *
 * ------------------------------------------------------------------- */
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 500;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.no-js #preloader,
.oldie #preloader {
  display: none;
}

#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  padding: 0;
  display: inline-block;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

#loader > div {
  content: "";
  background: #000000;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}

#loader > div:nth-of-type(1) {
  left: 15px;
}

#loader > div:nth-of-type(3) {
  left: -15px;
}

/* dots jump */
.dots-jump > div {
  -webkit-animation: dots-jump 1.2s infinite ease;
  animation: dots-jump 1.2s infinite ease;
  animation-delay: 0.2s;
}

.dots-jump > div:nth-of-type(1) {
  animation-delay: 0.4s;
}

.dots-jump > div:nth-of-type(3) {
  animation-delay: 0s;
}

@-webkit-keyframes dots-jump {
  0% {
    top: 0;
  }

  40% {
    top: -6px;
  }

  80% {
    top: 0;
  }

}

@keyframes dots-jump {
  0% {
    top: 0;
  }

  40% {
    top: -6px;
  }

  80% {
    top: 0;
  }

}

/* dots fade */
.dots-fade > div {
  -webkit-animation: dots-fade 1.6s infinite ease;
  animation: dots-fade 1.6s infinite ease;
  animation-delay: 0.4s;
}

.dots-fade > div:nth-of-type(1) {
  animation-delay: 0.8s;
}

.dots-fade > div:nth-of-type(3) {
  animation-delay: 0s;
}

@-webkit-keyframes dots-fade {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 0.2;
  }

  80% {
    opacity: 1;
  }

}

@keyframes dots-fade {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 0.2;
  }

  80% {
    opacity: 1;
  }

}

/* dots pulse */
.dots-pulse > div {
  -webkit-animation: dots-pulse 1.2s infinite ease;
  animation: dots-pulse 1.2s infinite ease;
  animation-delay: 0.2s;
}

.dots-pulse > div:nth-of-type(1) {
  animation-delay: 0.4s;
}

.dots-pulse > div:nth-of-type(3) {
  animation-delay: 0s;
}

@-webkit-keyframes dots-pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  40% {
    -webkit-transform: scale(1.1);
    transform: scale(1.3);
  }

  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

}

@keyframes dots-pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  40% {
    -webkit-transform: scale(1.1);
    transform: scale(1.3);
  }

  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

}