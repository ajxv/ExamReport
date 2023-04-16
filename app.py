import eel
import wx

# initializing the application  
eel.init('web')

@eel.expose
def save_file(file):
    pass

@eel.expose
def handleFileUpload(wildcard="*.xlsx"):
    app = wx.App(None)
    style = wx.FD_OPEN | wx.FD_FILE_MUST_EXIST
    dialog = wx.FileDialog(None, 'Open', wildcard=wildcard, style=style)
    if dialog.ShowModal() == wx.ID_OK:
        path = dialog.GetPath()
    else:
        path = None
    dialog.Destroy()
    return path

# starting the application  
eel.start("index.html", mode='firefox')