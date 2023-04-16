import eel
import wx
import os
import shutil

# initializing the application  
eel.init('web')

@eel.expose
def save_file(date, filepath, input_folder="input_files/"):

    if not os.path.exists(input_folder):
        os.mkdir(input_folder)
    
    filename = filepath.split(os.path.sep)[-1].replace(' ', '_')
    save_path = os.path.join(input_folder, f"{date}_{filename}")

    shutil.copyfile(filepath, save_path)

    return True

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