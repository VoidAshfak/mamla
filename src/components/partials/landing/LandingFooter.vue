<template>
  <footer class="vuero-footer">
    <div class="container">

      <div class="columns footer-body">
        <!-- Column -->
        <div class="column is-4">
          <div class="p-t-10 p-b-10">
            <AnimatedLogo
              width="36px"
              height="36px"
            />

            <div class="footer-description p-t-10 p-b-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sed mollitia facilis ipsam esse repudiandae praesentium!
            Et maxime, unde error, natus obcaecati assumenda quas molestiae incidunt maiores, necessitatibus temporibus accusantium!
            </div>
          </div>
          <div>
            <span class="moto">
              Designed and coded
              <i
                aria-hidden="true"
                class="text-danger"
              /> by
              <a
                href="#"
                target="_blank"
                class="has-text-primary"
              >
                Ashfak.
              </a>
            </span>
            <div class="social-links p-t-10 p-b-10">
              <a
                href="#"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-facebook"
                  />
                </span>
              </a>
              <a
                href="#"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-twitter"
                  />
                </span>
              </a>
              <a
                href="#"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-linkedin"
                  />
                </span>
              </a>
              <a
                href="#"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-dribbble"
                  />
                </span>
              </a>
              <a
                href="#"
                target="_blank"
              >
                <span class="icon">
                  <i
                    aria-hidden="true"
                    class="fab fa-github"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  list 1
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >Quality</a>
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >
                    GitHub Access
                  </a>
                </li>
                <li class="column-item">
                  <a href="#">Our licenses</a>
                </li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  list 2
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >Frequent questions</a>
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >
                    GitHub access
                  </a>
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >
                    Support center
                  </a>
                </li>
                <li class="column-item">
                  <a
                    href="#
                    "
                    target="_blank"
                  >Learning</a>
                </li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">
                  list 3
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >Terms of Service</a>
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >Privacy policy</a>
                </li>
                <li class="column-item">
                  <a
                    href="#"
                    target="_blank"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <p>
          <span
            role="img"
            aria-label="copyright"
          >&copy;</span> 2024-2025 |
          <a href="#">Mamla</a> | All Rights Reserved.
        </p>
      </div>
    </div>
    <div class="grids gridlines" />
  </footer>
  <!-- /Simple light footer -->
</template>

<style lang="scss">
.vuero-footer {
  position: relative;
  padding-bottom: 0 !important;
  padding-top: 4rem !important;
  background: var(--body-color);

  .grids {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8rem;
  }

  .footer-head {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--fade-grey-dark-4);

    .head-text {
      h3 {
        font-family: var(--font);
        font-size: 1.8rem;
        color: var(--dark-text);
      }

      p {
        font-size: 1.1rem;
        color: var(--light-text);
      }
    }

    .head-action {
      .buttons {
        .button {
          &.action-button {
            height: 36px;
            min-width: 140px;
          }

          &.chat-button {
            background: transparent;
            border: none;
            box-shadow: none;
            color: var(--primary);
            font-weight: 500;
          }
        }
      }
    }
  }

  .footer-body {
    padding-top: 3rem;

    .footer-column {
      padding-top: 20px;

      .column-header {
        font-family: var(--font-alt);
        text-transform: uppercase;
        color: var(--dark-text);
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 0;
      }

      .column-item {
        padding-bottom: 10px;

        a {
          font-family: var(--font);
          color: var(--light-text);

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }

    .social-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        color: var(--light-text);
        margin: 0 5px;

        &:hover,
        &:focus {
          color: var(--primary);
        }
      }
    }

    .footer-description {
      color: var(--light-text);
    }

    .moto {
      color: var(--light-text);
    }

    .small-footer-logo {
      height: 36px;
    }
  }

  .footer-copyright {
    font-family: var(--font);
    color: var(--light-text);
    padding: 4rem 0 2rem;

    a {
      color: var(--light-text);

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .vuero-footer {
      background: var(--landing-xxx-light-8);

      .footer-head {
        border-color: var(--landing-xxx-light-18);

        .head-text {
          h3 {
            color: var(--dark-dark-text);
          }

          p {
            font-size: 1.1rem;
            color: var(--light-text);
          }
        }

        .head-action {
          .buttons {
            .button {
              &.action-button {
                background: var(--primary);
                border-color: var(--primary);
              }

              &.chat-button {
                color: var(--primary);
                background: none !important;
              }
            }
          }
        }
      }

      .footer-body {
        .footer-column {
          .column-header {
            color: var(--dark-dark-text);
          }

          .column-item {
            a:hover {
              color: var(--primary);
            }
          }
        }

        .social-links {
          a:hover {
            color: var(--primary);
          }
        }
      }

      .footer-copyright {
        a {
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}

@media (width <= 767px) {
  .vuero-footer {
    .footer-head {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }

    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }

    .footer-description {
      max-width: 400px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }
  }
}
</style>
