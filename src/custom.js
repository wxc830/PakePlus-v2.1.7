/**
 * 自定义JavaScript文件
 * 增强应用功能和用户体验
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('自定义脚本加载成功');
    
    // 初始化所有增强功能
    initEnhancements();
});

// 初始化增强功能
function initEnhancements() {
    // 增强按钮交互
    enhanceButtons();
    
    // 增强输入框交互
    enhanceInputs();
    
    // 增强卡片交互
    enhanceCards();
    
    // 增强AI分析功能
    enhanceAiAnalysis();
    
    // 增强模态框交互
    enhanceModals();
    
    // 增强滚动效果
    enhanceScrollEffects();
}

// 增强按钮交互
function enhanceButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        // 添加点击效果
        button.addEventListener('click', function() {
            this.classList.add('scale-95');
            setTimeout(() => {
                this.classList.remove('scale-95');
            }, 150);
        });
        
        // 添加悬停效果
        button.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
}

// 增强输入框交互
function enhanceInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        // 添加焦点效果
        input.addEventListener('focus', function() {
            this.classList.add('ring-2');
            this.classList.add('ring-primary');
        });
        
        // 移除焦点效果
        input.addEventListener('blur', function() {
            this.classList.remove('ring-2');
            this.classList.remove('ring-primary');
        });
        
        // 添加回车提交功能
        if (input.type === 'text' || input.type === 'password') {
            input.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    // 查找最近的提交按钮
                    const submitButton = this.closest('div').querySelector('button[type="submit"], button');
                    if (submitButton) {
                        submitButton.click();
                    }
                }
            });
        }
    });
}

// 增强卡片交互
function enhanceCards() {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        // 添加鼠标进入效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        });
        
        // 添加鼠标离开效果
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.05)';
        });
    });
}

// 增强AI分析功能
function enhanceAiAnalysis() {
    const aiAnalysisBtn = document.getElementById('aiAnalysisBtn');
    if (aiAnalysisBtn) {
        // 添加点击效果
        aiAnalysisBtn.addEventListener('click', function() {
            console.log('AI分析按钮点击');
        });
    }
    
    // 增强AI分析结果显示
    const aiAnalysisResult = document.getElementById('aiAnalysisResult');
    if (aiAnalysisResult) {
        // 添加滚动效果
        aiAnalysisResult.addEventListener('scroll', function() {
            // 可以添加滚动相关的效果
        });
    }
}

// 增强模态框交互
function enhanceModals() {
    const modals = document.querySelectorAll('[id$="Modal"]');
    modals.forEach(modal => {
        // 添加打开动画
        const openButtons = document.querySelectorAll(`[onclick*="${modal.id}"], [data-target="${modal.id}"]`);
        openButtons.forEach(button => {
            button.addEventListener('click', function() {
                setTimeout(() => {
                    modal.querySelector('.modal-content').classList.add('modal-content');
                }, 10);
            });
        });
        
        // 添加关闭功能
        const closeButtons = modal.querySelectorAll('[id$="Close"], [class*="close"]');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.classList.add('hidden');
            });
        });
        
        // 点击模态框外部关闭
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
}

// 增强滚动效果
function enhanceScrollEffects() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 10) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-3');
                navbar.classList.add('shadow-md');
            } else {
                navbar.classList.add('py-3');
                navbar.classList.remove('py-2');
                navbar.classList.remove('shadow-md');
            }
        }
        
        // 滚动到顶部按钮
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove('hidden');
            } else {
                scrollTopBtn.classList.add('hidden');
            }
        }
    });
}

// 工具函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 导出函数（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initEnhancements,
        enhanceButtons,
        enhanceInputs,
        enhanceCards,
        enhanceAiAnalysis,
        enhanceModals,
        enhanceScrollEffects,
        debounce,
        throttle
    };
}
