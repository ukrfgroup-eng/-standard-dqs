# 🧠 NEURAL CORE SPECIFICATION (v1.0)

## 1. Протокол связи (Cognitive Exchange)
Все блоки системы MATRIX CORE взаимодействуют через унифицированный JSON-интерфейс. Это позволяет "Мозгу" менять структуру сайта на лету.

### Стандартный объект блока (The Atomic Block)
```json
{
  "block_id": "uuid",
  "type": "hero | ad_showcase | stats | cube_info",
  "content": {
    "title": "Строка или объект локализации",
    "data": "Массив объектов или медиа-ссылок"
  },
  "settings": {
    "animation": "3d-cube | rotate-y | fade-in",
    "theme": "dark | light | neon",
    "order": 10
  }
}
