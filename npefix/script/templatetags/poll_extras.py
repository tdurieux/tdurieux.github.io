from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

def diff_chuck2html(chucks):
    startedLines = chucks[0][4:len(chucks[0]) - 3]
    endStartLine = startedLines.index(',')
    startedLine = int(startedLines[:endStartLine])
    endOriginalFileLength = startedLines.index(" ", endStartLine)
    originalFileLength = int(startedLines[endStartLine+1:endOriginalFileLength])

    endEndLine = startedLines.index(',', endOriginalFileLength)
    endLine = int(startedLines[endOriginalFileLength+2:endEndLine])
    newFileLength = int(startedLines[endEndLine+1:])

    output = ""

    for line in chucks[1:]:
        if "@@" in line:
            output += "<tr class=\"chuck\">"
            output += "<td colspan=\"4\">"
            output += "</td>"
            output += "<td>\n"
            output += diff_chuck2html(chucks[chucks.index(line, 1):])
            return output
        if "---" in line:
            output += "</tbody></table>\n"
            output += diff2html("\n".join(chucks[chucks.index(line, 1):]))
            return output
        is_add = False
        is_remove = False
        if len(line) > 0:
            if line[0] == '+':
                is_add = True
            elif line[0] == '-':
                is_remove = True
        output += "<tr class=\""
        if is_add:
            output += "addition"
        if is_remove:
            output += "deletation"
        output += "\">"
        output += "<td class=\"line\" data-line-number=\""
        if not is_add:
            output += str(startedLine)
        output += "\"></td>"
        output += "<td class=\"line\" data-line-number=\""
        if not is_remove:
            output += str(endLine)
        output += "\"></td>"
        output += "<td class=\"code\"><span>"
        output += line[1:]
        output += "</span></td>"
        output += "</tr>\n"
        if is_add:
            endLine += 1
        if is_remove:
            startedLine += 1
        if not is_add and not is_remove:
            startedLine += 1
            endLine += 1
    return output

@register.filter(name='diff2html')
@stringfilter
def diff2html(diff):
    if diff == "":
        return ""
    lines = diff.splitlines()
    pathFile = lines[0][4:]

    output = "<table class=\"diff\" cellpadding=\"0\" cellspacing=\"0\">\n"
    output += "<thead><th><td colspan=\"4\">" + pathFile + "</td></th></thead><tbody>\n"
    output += diff_chuck2html(lines[2:])
    if not output.endswith("</tbody></table>\n"):
        output += "</tbody></table>\n"

    return output

register.filter("diff2html", diff2html)    