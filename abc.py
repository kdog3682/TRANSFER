import re

def replace(match, replacement, text, flags = 0):
    return re.sub(match, replacement, text, flags)


def MultipleReplace(text, list, singlepass = False):
    if singlepass:
        return re.sub(
            '|'.join(re.escape(key) for key in list.keys()),
            lambda k: list[k.group(0)],
            text
        )
    else:
        for key, val in list.items():
            text = replace(key, val, text, re.M)
        return text
        

text = 'bananas and apples taste greattttttttttttt'
list = {
    'bananas': 'goo',
    'tttt': 'yss'
}


    
    


def split(delimiter, text, count):
    return text.split(delimiter, count)
    return re.split(delimiter, text, count)
    

splitAtSpaceRE = ' (?! )'




def sr(f):
    with open(f) as file:
        return file.read()
        
def sw(f, content):
    with open(f, 'w') as file:
        file.write(content)
        


def FixPython(f, parser):
    text = sr(f)
    result = parser(text)
    write(f, result)

def FixPythonParser(s):
    replacements =objobj
    s = replace('.*dn\n', '', s)
    s = MultipleReplace(s, replacements, singlepass=True)