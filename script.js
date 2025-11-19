// 更新时间显示
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('update-time').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);

// 节能率环形图
const energySavingCtx = document.getElementById('energy-saving-chart').getContext('2d');
new Chart(energySavingCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [75, 25],
      backgroundColor: [
        '#00ffaa',
        'rgba(30, 30, 30, 0.8)'
      ],
      borderWidth: 0,
      cutout: '80%'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    animation: { animateRotate: true, animateScale: true }
  }
});

// 设备接入率环形图
const deviceConnectCtx = document.getElementById('device-connect-chart').getContext('2d');
new Chart(deviceConnectCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [5, 3],
      backgroundColor: [
        '#00a8ff',
        'rgba(30, 30, 30, 0.8)'
      ],
      borderWidth: 0,
      cutout: '80%'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    animation: { animateRotate: true, animateScale: true }
  }
});

// 功率趋势图
const powerTrendCtx = document.getElementById('power-trend-chart').getContext('2d');
new Chart(powerTrendCtx, {
  type: 'line',
  data: {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
    datasets: [{
      label: '功率 (W)',
      data: [1.2, 1.2, 5.8, 12.5, 8.6, 3.5, 42.5, 28.3],
      borderColor: '#00a8ff',
      backgroundColor: 'rgba(0, 168, 255, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#00ffaa',
      pointBorderColor: '#00ffaa',
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'rgba(255, 255, 255, 0.6)' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'rgba(255, 255, 255, 0.6)' }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e1e1e',
        titleColor: '#fff',
        bodyColor: '#e0e0e0',
        borderColor: '#00a8ff',
        borderWidth: 1
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  }
});

// 设备功耗占比图
const powerDistributionCtx = document.getElementById('power-distribution-chart').getContext('2d');
new Chart(powerDistributionCtx, {
  type: 'doughnut',
  data: {
    labels: ['书房电脑', '卧室风扇', '客厅LED灯', '客厅电视', '其他'],
    datasets: [{
      data: [25.6, 3.5, 1.2, 2.8, 9.4],
      backgroundColor: [
        '#00a8ff',
        '#00ffaa',
        '#7d5fff',
        '#ff7d00',
        '#4a5568'
      ],
      borderWidth: 2,
      borderColor: '#1e1e1e'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          padding: 15,
          boxWidth: 10,
          font: { size: 11 }
        }
      }
    },
    cutout: '60%'
  }
});

// 设备节能排行图
const energyRankingCtx = document.getElementById('energy-ranking-chart').getContext('2d');
new Chart(energyRankingCtx, {
  type: 'bar',
  data: {
    labels: ['客厅LED灯', '卧室风扇', '厨房咖啡机', '书房电脑', '客厅电视'],
    datasets: [{
      label: '节电量 (度/周)',
      data: [1.26, 0.98, 0.75, 0.42, 0.35],
      backgroundColor: [
        '#00ffaa',
        '#00ffaa80',
        '#00ffaa60',
        '#00ffaa40',
        '#00ffaa20'
      ],
      borderRadius: 4
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'rgba(255, 255, 255, 0.6)' }
      },
      y: {
        grid: { display: false },
        ticks: { color: 'rgba(255, 255, 255, 0.7)' }
      }
    },
    plugins: { legend: { display: false } }
  }
});

// 模拟设备接入效果
setTimeout(() => {
  const deviceList = document.querySelector('.space-y-3');
  const newDevice = document.createElement('div');
  newDevice.className = 'bg-dark-lighter rounded-lg p-3 flex items-center justify-between slide-in';
  newDevice.innerHTML = `
    <div class="flex items-center">
      <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
        <i class="fa fa-printer text-primary"></i>
      </div>
      <div>
        <div class="font-medium">办公室打印机</div>
        <div class="text-xs text-gray-400">新接入 刚刚</div>
      </div>
    </div>
    <div class="text-right">
      <div class="text-secondary font-bold">5.2W</div>
      <div class="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">新设备</div>
    </div>
  `;
  deviceList.insertBefore(newDevice, deviceList.firstChild);
  document.getElementById('device-count').textContent = '6台设备';
}, 5000);