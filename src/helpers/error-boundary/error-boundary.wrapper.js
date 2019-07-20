import React, {Component} from 'react'
import { injectIntl } from 'react-intl'
import messages from 'helpers/error-boundary/error-boundary.i18n.js'
import pandaImg from "assets/images/logo-pd.png"
import Error404 from "assets/images/logo-pd-404.png"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error(error, info)
  }

  render() {
    const {intl:{formatMessage}} = this.props
    if (!this.state.hasError) {
      return (
        <div className="panda-body">
          <div className="panda-wrapper">
            <div className="panda-wrapper__container">
              <header className="panda-wrapper__header">
                <div className="panda-wrapper__idea">
                  <img src={Error404} alt="Error" />
                </div>
                <div class="panda-wrapper__dot"></div>
                <div class="panda-wrapper__logo-panda">
                  <img src={pandaImg} alt="Pandita" />
                </div>
              </header>
              <h2 class="panda-wrapper__title">{formatMessage(messages.title)}</h2>
              <p class="panda-wrapper__description">
                {formatMessage(messages.description)}
              </p>
              <div class="panda-wrapper__arrow"></div>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default injectIntl(ErrorBoundary)