if (figma.editorType === 'figma' || figma.editorType === 'figjam' || figma.editorType === 'dev') {

  figma.showUI(__html__, { width: 480, height: 360, themeColors: true })
  if (figma.editorType === 'dev') {
    figma.ui.postMessage({ type: 'dev-mode' })
  }

  function loadLink() {
    figma.clientStorage.getAsync('link').then(link => {
      if (link) {
        figma.ui.postMessage({ type: 'load-link', content: link })
      }
    })
  }
  loadLink()

  figma.ui.onmessage = (msg: { type: string, content: any }) => {
    if (msg.type === 'save-link' && msg.content && msg.content.length > 0) {
      figma.clientStorage.setAsync('link', msg.content)
    } else if (msg.type === 'resize' && msg.content && msg.content.width && msg.content.height) {
      figma.ui.resize(msg.content.width, msg.content.height)
    } else {
      figma.closePlugin()
    }
  }
}