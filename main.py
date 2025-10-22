# scripts/agent.py
import json, sys, os

def handle(cmd):
    if cmd["action"] == "list":
        return {"files": os.listdir(".")}
    if cmd["action"] == "greet":
        return {"msg": f"Hello, {cmd['name']}!"}

for line in sys.stdin:
    req = json.loads(line)
    print(json.dumps(handle(req)), flush=True)
