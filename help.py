import json
import sys

def convert_yaml_to_json(yaml_text):
    """Конвертирует YAML-like текст в JSON массив"""
    projects = []
    
    lines = yaml_text.strip().split('\n')
    
    for line in lines:
        line = line.strip()
        if line.startswith('-'):
            # Новая запись
            projects.append({})
        elif ':' in line and projects:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip().strip('"')
            
            # Используем title если есть, иначе name
            if key == 'title':
                projects[-1]['title'] = value
            # weight игнорируем
    
    # Фильтруем только записи с title
    result = [p for p in projects if 'title' in p]
    return result

# Твой входной текст
input_text = """
- title: "Больница1"
  weight: 1
- name: "Больница2"
  weight: 2
- name: "Больница3"
  weight: 3
- name: "Больница4"
  weight: 4
- title: "Лестница"
  weight: 5
- title: "Курятник"
  weight: 6
- title: "Дом"
  weight: 7
- title: "Угол"
  weight: 8
- title: "Помещение1"
  weight: 9
- title: "Помещение2"
  weight: 10
- title: "Потолок1"
  weight: 11
- title: "Потолок2"
  weight: 12
- title: "Крыша1"
  weight: 13
- title: "Бревна"
  weight: 14
- title: "Крыша2"
  weight: 15
- title: "Вход"
  weight: 16
- title: "Кафе"
  weight: 17
- title: "Кухня"
  weight: 18
- title: "Вытяжка"
  weight: 19
"""

# Конвертируем
result = convert_yaml_to_json(input_text)

# Выводим результат
print(json.dumps(result, ensure_ascii=False, indent=2))