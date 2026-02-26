# EmailJS Template Configuration

## Single Template for All Email Types

Since we're using one template (`template_nvgxcjk`) for all email types, here's the template you should use in your EmailJS dashboard.

---

## Template Setup in EmailJS

1. Go to your EmailJS Dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Select or create template: `template_nvgxcjk`
4. Use the template below

---

## Email Template Content

### Subject Line:
```
{{subject}} - {{from_name}}
```

Or use a simpler version:
```
New {{type}} from {{from_name}}
```

---

### Email Body (HTML):

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #c026d3 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
        }
        .info-box {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        .label {
            font-weight: bold;
            color: #2563eb;
            display: inline-block;
            min-width: 120px;
        }
        .value {
            color: #1f2937;
        }
        .message-box {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }
        .footer {
            background: #1f2937;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            font-size: 12px;
        }
        .type-badge {
            display: inline-block;
            background: #2563eb;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 28px;">NVNS Software Solutions</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
    </div>
    
    <div class="content">
        <div class="type-badge">{{type}}</div>
        
        <div class="info-box">
            <h2 style="margin-top: 0; color: #1f2937;">Contact Information</h2>
            
            <p style="margin: 10px 0;">
                <span class="label">Name:</span>
                <span class="value">{{from_name}}</span>
            </p>
            
            <p style="margin: 10px 0;">
                <span class="label">Email:</span>
                <span class="value">{{from_email}}</span>
            </p>
            
            <p style="margin: 10px 0;">
                <span class="label">Phone:</span>
                <span class="value">{{phone}}</span>
            </p>
            
            {{#course}}
            <p style="margin: 10px 0;">
                <span class="label">Course:</span>
                <span class="value">{{course}}</span>
            </p>
            {{/course}}
            
            {{#learning_path}}
            <p style="margin: 10px 0;">
                <span class="label">Learning Path:</span>
                <span class="value">{{learning_path}}</span>
            </p>
            {{/learning_path}}
            
            {{#enrollment_date}}
            <p style="margin: 10px 0;">
                <span class="label">Date:</span>
                <span class="value">{{enrollment_date}}</span>
            </p>
            {{/enrollment_date}}
        </div>
        
        {{#message}}
        <div class="message-box">
            <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
            <p style="white-space: pre-wrap; color: #4b5563;">{{message}}</p>
        </div>
        {{/message}}
        
        <div style="margin-top: 30px; padding: 15px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;">
                <strong>Action Required:</strong> Please contact this student at your earliest convenience.
            </p>
        </div>
    </div>
    
    <div class="footer">
        <p style="margin: 0;">This email was sent from NVNS Software Solutions website</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Reply to: {{reply_to}}</p>
    </div>
</body>
</html>
```

---
 