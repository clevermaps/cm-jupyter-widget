import anywidget
import traitlets

class CleverMapsWidget(anywidget.AnyWidget):
    
    _esm = "./index.js"
    _css = "./index.css"

    # required
    view_url = traitlets.Unicode(allow_none=False).tag(sync=True)
    # optional
    options = traitlets.Dict(allow_none=True).tag(sync=True)